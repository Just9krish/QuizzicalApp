export default function Start(props) {
    return (
        <div className="flex justify-center items-center h-screen flex-col gap-4 p-5 text-center">
            <h1 className="text-clr-blue-text font-bold text-3xl font-karla md:text-6xl">Quizzical</h1>
            <p className="text-clr-blue-text font-inter md:text-xl">Click on the start button to test your knowledge!</p>
            <button
                className="
                text-clr-white 
                bg-clr-blue-btn 
                font-inter
                font-semibold
                px-6 py-2 
                rounded-md
                shadow-xl
                transition-all
                hover:opacity-80
                focus:opacity-80
                active:scale-90 
                md:text-xl
                md:px-12
                md:py-4
                md:rounded-lg 
                "
                onClick={props.startGame}
            >
                Start quiz
            </button>
        </div>
    )
}