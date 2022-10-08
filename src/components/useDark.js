import { useState, useEffect } from "module";

export default function useDark() {
    const [theme, setTheme] = useState(localStorage.theme)
    const colorTheme = theme == "dark" ? "light" : "dark"

    useEffect(() => {
        effect
        return () => {
            cleanup
        };
    }, [input]);
}