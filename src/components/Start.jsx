export default function Start(props) {
    return (
        <div className="animate-fade-in flex justify-center items-center h-screen flex-col gap-4 p-5 text-center bg-transparent dark:bg-dark-bg transition duration-500">
            <h1 className="text-clr-blue-text font-bold text-3xl font-karla md:text-6xl dark:text-dark-head transition duration-500">Quizzical</h1>
            <p className="text-clr-blue-text font-inter md:text-xl dark:text-dark-para transition duration-500">Click on the start button to test your knowledge!</p>
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
                dark:bg-dark-head
                dark:text-dark-para
                duration-500
                "
                onClick={props.startGame}
            >
                Start quiz
            </button>
        </div>
    )
}