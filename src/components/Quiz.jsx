export default function Quiz(props) {

    const optionElements = props.options.map(option => {

        let background = ""
        if (option.isHeldCorrect) {
            background = 'border-clr-right-answer bg-clr-right-answer'
        } else if (option.isHeldIncorrect) {
            background = 'border-clr-wrong-answer bg-clr-wrong-answer'
        } else {
            background = option.isHeld ? 'border-clr-choose bg-clr-choose' : 'border-clr-blue-btn'
        }

        return <button className={`
        text-sm
        border 
        rounded-md 
        py-1 px-2 
        font-inter 
        md:text-lg
        md:font-medium
        lg:text-lg
        lg:px-9
        lg:rounded-xl
        transition-colors
        hover:bg-clr-choose
        hover:border-clr-choose
        focus:outline-none
        focus:bg-clr-choose
        focus:border-clr-choose
        ${background}
        `}
            key={option.id}
            onClick={() => props.chooseOption(props.id, option.id)}
        >{option.value}
        </button>
    })

    return (
        <div className="text-clr-blue-text space-y-5 z-10">
            <p className="text-md font-karla font-bold md:text-xl lg:text-2xl">{props.question}</p>
            <div className="flex flex-wrap gap-4 lg:gap-8">
                {optionElements}
            </div>
            <hr className="bg-clr-white"></hr>
        </div>
    )
}