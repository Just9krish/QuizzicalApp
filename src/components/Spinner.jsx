import './spinner.css'
export default function Spinner() {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='text-clr-blue-text font-inter font-medium text-base md:text-xl'>Please wait while data is loading.</h1>
            <div class="lds">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}