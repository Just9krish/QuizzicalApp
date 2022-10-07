import {decode} from 'html-entities';

export default function Quiz(props) {

    const optionElements = props.options.map(option => {

        let background = ""
        if (option.isHeldCorrect) {
            background = 'disabled:border-clr-right-answer disabled:bg-clr-right-answer'
        } else if (option.isHeldIncorrect) {
            background = 'disabled:border-clr-wrong-answer disabled:bg-clr-wrong-answer opacity-80 cursor-not-allowed'
        } else if (option.isNotSelectedCorrect) {
            background = 'disabled:border-clr-right-answer disabled:bg-clr-right-answer'
        } else if (option.isNotSelectedIncorrect) {
            background = `cursor-not-allowed disabled:bg-white opacity-80 dark:disabled:bg-[#04293A]`
        } else {
            background = option.isHeld ? 'border-clr-choose bg-clr-choose dark:border-[#04293A] dark:bg-[#04293A]' : 'border-clr-blue-btn'
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
        dark:hover:bg-[#04293A]
        dark:hover:border-[#04293A]
        focus:outline-none
        focus:bg-clr-choose
        focus:border-clr-choose 
        dark:text-dark-para
        ${background}
        `}
            key={option.id}
            onClick={() => props.chooseOption(props.id, option.id)}
            disabled={props.disable}
        >{decode(option.value)}
        </button>
    })

    return (
        <div className="animate-fade-in text-clr-blue-text space-y-5 z-10 ">
            <p className="text-md font-karla font-bold md:text-xl lg:text-2xl dark:text-dark-para">{decode(props.question)}</p>
            <div className="flex flex-wrap gap-4 lg:gap-8">
                {optionElements}
            </div>
            <hr className="bg-clr-white dark:bg-dark-head"></hr>
        </div>
    )
}