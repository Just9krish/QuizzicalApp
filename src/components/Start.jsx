export default function Start(props) {
    return (
        <div className="flex justify-center items-center h-screen flex-col space-y-5 bg-[#F5F7FB]">
            <h1 className="text-blue-900 font-bold text-4xl m-0 font-mono">Quizzical</h1>
            <p className="text-xl text-blue-900">Click on the start button to start Quiz Now!</p>
            <button
                className="
                text-gray-200 
                bg-blue-900 
                px-6 py-3 
                rounded-xl 
                text-base 
                font-semibold"
                onClick={props.startGame}
            >
                Start quiz
            </button>
        </div>
    )
}