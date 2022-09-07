export default function Quiz(props) {

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    const quiz = props.allQuiz.map((quiz, id) => {

        const optionsArr = (quiz.incorrect_answers.concat(quiz.correct_answer))
        // console.log(optionsArr)
        shuffleArray(optionsArr)
        // console.log(optionsArr)

        return (<div key={id} className="text-blue-900 space-y-5">
            <p className="text-lg font-bold">{quiz.question}</p>
            <div className="flex flex-wrap gap-5">
                {optionsArr.map((option, id) =>
                    <button key={id} className="border border-blue-700 rounded-md py-1 px-6 font-medium hover:bg-slate-300 hover:border hover:border-slate-300">
                        {option}</button>
                )}
            </div>
            <hr className="bg-slate-500"></hr>
        </div>)
    })

    // const questionsElements = props.allQuiz.map(quiz => (
    //     <div className="text-blue-900 space-y-5">
    //         <p className="text-lg font-bold">{quiz.question}</p>
    //         <div className="flex flex-wrap gap-5">
    //             {quiz.incorrect_answers.map(options =>
    //                 <button className="border border-blue-700 rounded-md py-1 px-6 font-medium hover:bg-slate-300 hover:border hover:border-slate-300">
    //                     {options}</button>
    //             )}
    //             <button className="border border-blue-700 rounded-md py-1 px-6 font-medium hover:bg-slate-300 hover:border hover:border-slate-300">
    //                     {quiz.correct_answer}</button>
    //         </div>
    //         <hr className="bg-slate-500"></hr>
    //     </div>
    // ))

    return (
        <div className="space-y-5 max-w-5xl mx-auto my-11 p-5">
            {/* {JSON.stringify(allQuiz, null, 2)} */}
            {quiz}
            <div className="flex justify-center items-center">
                <p className="font-bold text-lg text-blue-900 mr-4">You scored 4/5 correct answers</p>
                <button
                    onClick={props.startGame}
                    className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">Check answers</button>
            </div>
        </div>
    )
}