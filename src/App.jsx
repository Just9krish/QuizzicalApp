import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Start from './components/Start'
import Quiz from './components/Quiz'


function App() {
  const [isStart, setIsStart] = useState(false)
  const [allQuiz, setAllQuiz] = useState([])


  function startGame() {
    setIsStart(prevValue => !prevValue)
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
      .then(response => response.json())
      .then(data => setAllQuiz(newQuiz(data.results)))
  }, [])

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
    // console.log(correctAnswer)
    return (listOfOptions.map(option => {
      return {
        id: nanoid(),
        value: option,
        isHeld: false,
        isCorrect: option === correctAnswer ? true : false,
        isHeldCorrect: false,
        isHeldIncorrect: false
      }
    }))
  }

  function chooseOption(quizId, optionId) {
    setAllQuiz(prevAllQuiz => prevAllQuiz.map(quiz => {
      const optionList = quiz.options.map(option => {
        return option.id === optionId ?
          { ...option, isHeld: !option.isHeld } :
          option
      })
      return ({
        ...quiz,
        options: optionList
      })
    }))
  }

  function checkAnswers() {
    setAllQuiz(prevAllQuiz => prevAllQuiz.map(quiz => {
      const checkedAnswers = quiz.options.map(option => {
        if (option.isHeld && option.isCorrect) {
          // console.log('wrong')
          return {
            ...option,
            isHeldCorrect: true
          }
        } else if (option.isHeld && !option.isCorrect) {
          // console.log('right')
          return {
            ...option,
            isHeldIncorrect: true
          }
        } else {
          return {
            ...option
          }
        }
      })
      return {
        ...quiz,
        options: checkedAnswers
      }
    }))
  }

  console.log(allQuiz)

  const quizElements = allQuiz.map(quiz => (
    <Quiz
      question={quiz.question}
      key={quiz.id}
      id={quiz.id}
      options={quiz.options}
      chooseOption={chooseOption}
    />
  ))


  return (
    <main>
      {!isStart ?
        <Start
          startGame={startGame}
        /> :
        <div className="space-y-5 max-w-5xl mx-auto my-11 p-5">
          {quizElements}
          <div className="flex justify-center items-center">
            <button onClick={checkAnswers} className="bg-clr-blue-btn text-clr-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">Check Answers</button>
          </div>
        </div>
      }
    </main>
  )
}

export default App
