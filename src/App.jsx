import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
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
  }, [0])

  function newQuiz(listOfQuizs) {
    return listOfQuizs.map(quiz => ({
      id: nanoid(),
      question: quiz.question,
      correctAnswer: quiz.correct_answer,
      options: settingOptions(shuffleArray([...quiz.incorrect_answers, quiz.correct_answer]))
    }))
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function settingOptions(listOfOptions) {
    return (listOfOptions.map(option => {
      return {
        id: nanoid(),
        value: option,
        isheld: false
      }
    }))
  }

  // console.log(allQuiz)

  const quizElements = allQuiz.map(quiz => (
    <Quiz
      question={quiz.question}
      key={quiz.id}
      id={quiz.id}
      options={quiz.options}
      chooseOption={chooseOption}
    />
  ))

  function chooseOption(quizId, optionId) {
    setAllQuiz(prevAllQuiz => prevAllQuiz.map(quiz => {
      return quiz.options.map(option => {
        if (option.id === optionId) {
          return ({
            ...option,
            isHeld: !option.isHeld
          })
        }
      })
    }))
  }

  return (
    <main>
      {!isStart ?
        <Start
          startGame={startGame}
        /> :
        <div className="space-y-5 max-w-5xl mx-auto my-11 p-5">
          {quizElements}
          <div className="flex justify-center items-center">
            <p className="font-bold text-lg text-clr-blue-text mr-4">You scored 4/5 correct answers</p>
            <button
              onClick={startGame}
              className="bg-clr-blue-btn text-clr-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">Check answers</button>
          </div>
        </div>
      }
    </main>
  )
}

export default App
