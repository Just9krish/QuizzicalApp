import { useState, useEffect } from "react"

export default function Quiz() {

    const [allQuiz, setAllQuiz] = useState([])

    const [quiz, setQuiz] = useState({
        questions: '',
        correctAnswer: '',
        inCorrectAnswer: ''
    })

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
            .then(response => response.json())
            .then(data => data.results)
            .then(quizQuestions => setAllQuiz(quizQuestions))
    }, [])

    // console.log(allQuiz)

    const questionsElements = allQuiz.map(quiz => (
        <div className="text-blue-900">
            <p className="text-base font-bold">{quiz.question}</p>
            <div className="flex space-x-5">
                <button className="border-none border-2 border-blue-700 rounded-md">{quiz.correct_answer}</button>
                <button className="border-none border-2 border-blue-700 rounded-md">{quiz.incorrect_answers[0]}</button>
                <button className="border-none border-2 border-blue-700 rounded-md">{quiz.incorrect_answers[1]}</button>
                <button className="border-none border-2 border-blue-700 rounded-md">{quiz.incorrect_answers[2]}</button>
            </div>
        </div>
    ))

    return (
        <div className="space-y-5">
            {/* {JSON.stringify(allQuiz, null, 2)} */}
            {questionsElements}
        </div>
    )
}