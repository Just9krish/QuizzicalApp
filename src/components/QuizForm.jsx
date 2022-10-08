import { useState } from "react"

export default function QuizForm(props) {

    const [formData, setFormData] = useState({
        numOfQuestions: "5",
        quizDifficulty: '',
        quizType: '',
        quizCategory: ''
    })

    const BASE_URL = `https://opentdb.com/api.php?amount=${formData.numOfQuestions}&category=${formData.quizCategory}&difficulty=${formData.quizDifficulty}&type=${formData.quizType}`


    function changeHandler(event) {
        const { value, name, type } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type == "text" ? value.replace(/\D/g, '') : value
            }
        })
    }


    return (
        <div className="dark:bg-dark-bg transition duration-500 z-10">
            <div className="animate-fade-in relative flex h-screen items-center justify-center flex-col px-5 md:max-w-xl mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-karla text-clr-blue-text dark:text-dark-head">Create a Quiz</h1>
                <p className="text-sm md:text-base lg:text-xl text-center mt-3 mb-5 text-clr-blue-text font-medium font-inter dark:text-dark-para">Choose the difficulty level, numbers of questions and category of questions you would like the quiz to be created.</p>
                <form className="space-y-5 mt-3 px-3">
                    <div className="flex justify-between">
                        <label className="mb-2 mr-2 tracking-wide text-clr-blue-text text-sm md:text-base dark:text-dark-para" htmlFor="numOfQuestions">Number of Questions:</label>
                        <input name="numOfQuestions" value={formData.numOfQuestions} onChange={changeHandler} min="1" max="50"
                            className="appearance-none margin-0 bg-gray-200 text-gray-700 border rounded py-1 px-1 mb-3 focus:outline-none focus:bg-white"
                            type="text" id="numOfQuestions" placeholder="Number of questions" />
                    </div>

                    <div className="relative flex justify-between">
                        <label className="mb-2 mr-2 tracking-wide text-clr-blue-text text-sm md:text-base dark:text-dark-para" htmlFor="quizDifficulty">Select Difficulty:</label>
                        <select name="quizDifficulty" id="quizDifficulty" value={formData.quizDifficulty} onChange={changeHandler} className="appearance-none text-center bg-gray-200 border border-gray-200 text-gray-700 py-1 px-1 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="">Random</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>

                    <div className="relative flex justify-between">
                        <label className="mb-2 mr-2 tracking-wide text-clr-blue-text text-sm md:text-base dark:text-dark-para" htmlFor="quizType">Select Type :</label>
                        <select name="quizType" id="quizType" value={formData.quizType} onChange={changeHandler} className="appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-1 px-1 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="">Any Type</option>
                            <option value="multiple">Multiple Choice</option>
                            <option value="boolean">True / False</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>

                    <div className="relative flex justify-between flex-wrap">
                        <label className="mb-2 mr-2 tracking-wide text-clr-blue-text text-sm md:text-base dark:text-dark-para" htmlFor="quizCategory">Select Category :</label>
                        <select name="quizCategory" id="quizCategory" value={formData.quizCategory} onChange={changeHandler} className="appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-1 px-1 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="">Any Category</option>
                            <option value="9">General Knowledge</option>
                            <option value="10">Entertainment: Books</option>
                            <option value="11">Entertainment: Film</option>
                            <option value="12">Entertainment: Music</option>
                            <option value="13">Entertainment: Musicals &amp; Theatres</option>
                            <option value="14">Entertainment: Television</option>
                            <option value="15">Entertainment: Video Games</option>
                            <option value="16">Entertainment: Board Games</option>
                            <option value="17">Science &amp; Nature</option>
                            <option value="18">Science: Computers</option>
                            <option value="19">Science: Mathematics</option>
                            <option value="20">Mythology</option>
                            <option value="21">Sports</option>
                            <option value="22">Geography</option>
                            <option value="23">History</option>
                            <option value="24">Politics</option>
                            <option value="25">Art</option>
                            <option value="26">Celebrities</option>
                            <option value="27">Animals</option>
                            <option value="28">Vehicles</option>
                            <option value="29">Entertainment: Comics</option>
                            <option value="30">Science: Gadgets</option>
                            <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                            <option value="32">Entertainment: Cartoon &amp; Animations</option>
                        </select>
                        <div className="pointer-events-none hidden absolute inset-y-0 right-0 md:flex md:items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </form>
                <div className="mt-7 px-2 flex justify-between w-full md:px-5">
                    <button onClick={props.startGame} className="text-sm text-clr-blue-text bg-clr-white font-inter py-1 px-2 md:text-lg lg:text-lg lg:px-8 rounded-md shadow-xl transition-all hover:opacity-80 active:scale-90 focus:opacity-80 md:rounded-lg dark:text-clr-white dark:bg-clr-blue-btn">Back</button>
                    <button onClick={() => props.formFunction(BASE_URL)} className="text-sm text-clr-white bg-clr-blue-btn font-inter py-1 px-2 md:text-lg lg:text-lg lg:px-8 rounded-md shadow-xl transition-all hover:opacity-80 active:scale-90 focus:opacity-80 md:rounded-lg dark:bg-dark-head dark:text-dark-para">Let's do this</button>
                </div>
            </div >
        </div>
    )
}