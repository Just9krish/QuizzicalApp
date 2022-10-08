// Modules
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

// Components
import Start from './components/Start'
import Quiz from './components/Quiz'
import QuizForm from './components/QuizForm'
import Spinner from './components/Spinner'
import yellowBlob from './assets/yellow-blob.svg'
import blueBlob from './assets/blue-blob.svg'
import Switcher from './components/Switcher'


function App() {
  const [isStart, setIsStart] = useState(false)
  const [isFormFilled, setIsFormFilled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [BASE_URL, setBASE_URL] = useState("https://opentdb.com/api.php?amount=5")
  const [allQuiz, setAllQuiz] = useState([])
  const [isPlayAgain, setIsPlayAgain] = useState(false)
  const [isAllSelect, setIsAllSelect] = useState(false)
  const [score, setScore] = useState(0)
  const [answerIndex, setAnswerIndex] = useState(0)
  const [isDarkMode, setISDarkMode] = useState(false)


  function startGame() {
    setIsStart(prevValue => !prevValue)
  }

  function formFunction(url) {
    setBASE_URL(url)
    setIsFormFilled(prev => !prev)
    setIsAllSelect(false)
    setAnswerIndex(0)
  }

  function newGame() {
    setIsPlayAgain(prevValue => !prevValue)
    setIsAllSelect(prevValue => !prevValue)
    setScore(0)
    setAnswerIndex(0)
  }

  useEffect(() => {
    async function getQuizData() {
      setIsLoading(true)
      const response = await fetch(BASE_URL)
      const data = await response.json()
      setIsLoading(false)
      return data
    }

    getQuizData().then(data => setAllQuiz(newQuiz(data.results)))
  }, [isPlayAgain, isFormFilled])

  function newQuiz(listOfQuizs) {
    return listOfQuizs.map(quiz => ({
      id: nanoid(),
      question: quiz.question,
      correctAnswer: quiz.correct_answer,
      options: settingOptions(shuffleArray([...quiz.incorrect_answers, quiz.correct_answer]), quiz.correct_answer)
    }))
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function settingOptions(listOfOptions, correctAnswer) {
    return (listOfOptions.map(option => {
      return {
        id: nanoid(),
        value: option,
        isHeld: false,
        isCorrect: option === correctAnswer ? true : false,
        isHeldCorrect: false,
        isHeldIncorrect: false,
        isChecked: false
      }
    }))
  }


  function chooseOption(quizId, optionId) {

    setAllQuiz(prevAllQuiz => prevAllQuiz.map(quiz => {
      if (quiz.id === quizId) {
        const optionList = quiz.options.map(option => {
          return option.id === optionId || option.isHeld ?
            { ...option, isHeld: !option.isHeld } :
            option
        })
        return {
          ...quiz,
          options: optionList
        }
      } else {
        return quiz
      }
    }))

    allQuiz.map(quiz => {
      if (quizId === quiz.id) {
        quiz.options.map(option => {
          if (option.isHeld) {
            setAnswerIndex(pre => pre - 1)
          }
          else if (!option.isHeld && option.id === optionId) {
            setAnswerIndex(pre => pre + 1)
          }
        })
      }
    })
  }

  function checkAnswers() {
    setAllQuiz(prevAllQuiz => prevAllQuiz.map(quiz => {
      const checkedAnswers = quiz.options.map(option => {
        if (option.isHeld && option.isCorrect) {
          setScore(prevScore => prevScore + 1)
          return ({
            ...option,
            isHeldCorrect: true
          })
        } else if (option.isHeld && !option.isCorrect) {
          return ({
            ...option,
            isHeldIncorrect: true
          })
        } else if (!option.isHeld && option.isCorrect) {
          return ({
            ...option,
            isNotSelectedCorrect: true
          })
        } else if (!option.isHeld && !option.isCorrect) {
          return ({
            ...option,
            isNotSelectedIncorrect: true
          })
        } else {
          return ({
            ...option
          })
        }
      })
      return {
        ...quiz,
        options: checkedAnswers
      }
    }))
    setIsAllSelect(prevValue => !prevValue)
  }

  const quizElements = allQuiz.map(quiz => (
    <Quiz
      question={quiz.question}
      key={quiz.id}
      id={quiz.id}
      options={quiz.options}
      chooseOption={chooseOption}
      disable={isAllSelect}
    />
  ))


  function toggleDark() {
    setISDarkMode(prev => !prev)
  }


  return (
    <main className={`relative overflow-hidden ${isDarkMode && 'dark'}`}>

      <img src={yellowBlob} className="absolute top-0 right-0 -rotate-12 translate-x-1/2 -translate-y-1/3 scale-125 pointer-events-none sm:scale-90 dark:hidden" />
      <img src={blueBlob} className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/2 scale-125 pointer-events-none sm:scale-90 dark:hidden" />

      <div className="absolute left-[80%] right-0 z-50">
        <Switcher toggleDark={toggleDark} isDarkMode={isDarkMode} />
      </div>

      {
        !isStart ?
          <Start
            startGame={startGame}
          /> :
          !isFormFilled ?
            <QuizForm formFunction={formFunction} startGame={startGame} /> :
            isLoading ? <Spinner /> :
              <div className="py-4 dark:bg-dark-bg transition duration-500">
                <div className="space-y-5 max-w-5xl mx-auto p-5 relative z-10">
                  <button onClick={formFunction} className="text-sm text-clr-white bg-clr-blue-btn font-inter py-1 px-2 md:text-lg lg:text-lg lg:px-8 rounded-md shadow-xl transition-all hover:opacity-80 active:scale-90 focus:opacity-80 md:rounded-lg">Back</button>
                  {quizElements}
                  {
                    answerIndex != allQuiz.length ?
                      <p className="text-md py-2 text-center font-karla text-clr-blue-text md:text-xl lg:text-2xl dark:text-dark-para">Select the remaining {allQuiz.length - answerIndex}{" "}
                        questions</p>
                      :
                      !isAllSelect ?
                        <div className="transition-all flex items-center justify-center ">
                          <button onClick={checkAnswers} className="bg-clr-blue-btn text-clr-white px-6 py-2 rounded-md shadow-xl transition-all font-semibold font-inter hover:opacity-80 focus:opacity-80 active:scale-90 md:text-xl md:px-12 md:py-4 md:rounded-lg dark:bg-dark-head dark:text-dark-para">Check Answers</button>
                        </div>
                        :
                        <div className="transition-all text-center space-y-3 md:space-y-0 md:flex md:items-center md:justify-center">
                          <p className="text-clr-blue-text text-md mr-8 font-inter font-bold md:text-xl lg:text-2xl dark:text-dark-para">You scored {score}/{allQuiz.length} correct {score > 1 ? 'answers' : 'answer'}.</p>
                          <button onClick={newGame} className="bg-clr-blue-btn text-clr-white px-6 py-2 rounded-md shadow-xl transition-all font-semibold font-inter hover:opacity-80 focus:opacity-80 active:scale-90 md:text-xl md:px-12 md:py-4 md:rounded-lg dark:bg-dark-head dark:text-dark-para">Play again</button>
                        </div>
                  }
                </div>
              </div>
      }
    </main>
  )
}

export default App
