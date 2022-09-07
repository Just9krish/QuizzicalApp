import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Start from './components/Start'
import Quiz from './components/Quiz'


function App() {
  const [isStart, setIsStart] = useState(false)
  const [allQuiz, setAllQuiz] = useState([])
  const [quiz, setQuiz] = useState({
    question: '',
    answer: '',
    options: '',
    id: nanoid()
  })

  function startGame() {
    setIsStart(prevValue => !prevValue)
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
      .then(response => response.json())
      .then(data => data.results)
      .then(quizQuestions => setAllQuiz(quizQuestions))
  }, [0])

  // console.log(allQuiz)

  function getQuiz() {
    setQuiz(prevQuiz => {
      return {
        ...prevQuiz,
        question : allQuiz
      }
    })
  }

  function options() {
    
  }

  return (
    <main>
      {
        !isStart ?
          <Start
            startGame={startGame}
          /> :
          <Quiz
            startGame={startGame}
            allQuiz={allQuiz}
          />
      }
    </main>
  )
}

export default App
