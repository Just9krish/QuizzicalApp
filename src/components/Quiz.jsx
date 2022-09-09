export default function Quiz(props) {
    
    const optionElements = props.options.map(option => {
        return <button className={`
        border 
        border-clr-blue-btn 
        rounded-md 
        py-1 px-6 
        font-inter 
        font-medium
        hover:bg-clr-choose 
        hover:border 
        hover:border-clr-choose
        ${option.isHeld ? 'bg-clr-choose border-clr-choose' : 'white'}
        `}
            key={option.id}
            onClick={() => props.chooseOption(props.id, option.id)}
        >{option.value}
        </button>
    })

    return (

        <div className="text-clr-blue-text space-y-5">
            <p className="text-lg font-karla font-bold">{props.question}</p>
            <div className="flex flex-wrap gap-5">
                {optionElements}
            </div>
            <hr className="bg-slate-500"></hr>
        </div>

    )
}