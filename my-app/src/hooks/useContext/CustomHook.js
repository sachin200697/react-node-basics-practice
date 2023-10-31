import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ToggleThemeContext = React.createContext();

//function name should start with use to use react hooks inside a function, so that
// React with assume that we are creating custom hooks
export function useTheme(){
    return useContext(ThemeContext);
}

//function name should start with use to use react hooks inside a function
// React with assume that we are creating custom hooks
export function useToggleTheme(){
    return useContext(ToggleThemeContext);
}

export function useDarkTheme() {
    return [useTheme(), useToggleTheme()];
}

export default function CustomHook({children}){
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme);
    }
    return <React.Fragment>
        <ThemeContext.Provider value={darkTheme}>
            <ToggleThemeContext.Provider value={toggleTheme}>
                {children}
            </ToggleThemeContext.Provider>
        </ThemeContext.Provider>
    </React.Fragment>
}