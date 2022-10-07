import './style/spinner.css'
export default function Spinner() {
    return (
        <div className='h-screen flex flex-col justify-center items-center dark:bg-dark-bg'>
            <h1 className='text-clr-blue-text font-inter font-medium text-base md:text-xl dark:text-dark-para'>Please wait while data is loading.</h1>
            <div className="lds">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}