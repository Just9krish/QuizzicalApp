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
        <div className="text-blue-900 space-y-5">
            <p className="text-lg font-bold">{quiz.question}</p>
            <div className="flex space-x-5">
                <button className="border border-blue-700 rounded-md py-1 px-6 font-medium hover:bg-slate-300 hover:border hover:border-slate-300">{quiz.correct_answer}</button>
                <button className="border border-blue-700 rounded-md py-1 px-6 font-medium hover:bg-slate-300 hover:border hover:border-slate-300">{quiz.incorrect_answers[0]}</button>
                <button className="border border-blue-700 rounded-md py-1 px-6 font-medium hover:bg-slate-300 hover:border hover:border-slate-300">{quiz.incorrect_answers[1]}</button>
                <button className="border border-blue-700 rounded-md py-1 px-6 font-medium hover:bg-slate-300 hover:border hover:border-slate-300">{quiz.incorrect_answers[2]}</button>
            </div>
            <hr className="bg-slate-500"></hr>
        </div>
    ))

    return (
        <div className="space-y-5 max-w-5xl mx-auto my-11 p-5">
            {/* {JSON.stringify(allQuiz, null, 2)} */}
            {questionsElements}
            <div className="flex justify-center items-center">
                <p className="font-bold text-lg text-blue-900 mr-4">You scored 4/5 correct answers</p>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">Check answers</button>
            </div>
        </div>
    )
}