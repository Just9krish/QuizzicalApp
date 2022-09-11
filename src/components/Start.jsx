export default function Start(props) {
    return (
        <div className="flex justify-center items-center h-screen flex-col space-y-5 bg-clr-white p-5 text-center">
            <h1 className="text-clr-blue-text font-bold text-4xl m-0 font-karla">Quizzical</h1>
            <p className="text-xl text-clr-blue-text font-inter">Click on the start button to start Quiz Now!</p>
            <button
                className="
                text-clr-white 
                bg-clr-blue-btn 
                px-12 py-3 
                rounded-xl 
                text-xl 
                font-semibold
                font-inter"
                onClick={props.startGame}
            >
                Start quiz
            </button>
        </div>
    )
}