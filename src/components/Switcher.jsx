import "./style/switcher.css"
export default function Switcher(props) {
    return (
        <div className={`theme-toggle ${props.isDarkMode && "day"}`} onClick={props.toggleDark}>
            <div className={`moon ${props.isDarkMode && "sun"}`}>
            </div>
        </div >
    )
}