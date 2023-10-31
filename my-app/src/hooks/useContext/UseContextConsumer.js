import React from "react";
import { useDarkTheme, useTheme, useToggleTheme } from "./CustomHook";

export default function UseContextConsumer(props) {
    // const darkTheme = useTheme();
    // const toggleTheme = useToggleTheme();
    const [darkTheme, toggleTheme] = useDarkTheme();
    const style = {
        backgroundColor: darkTheme? 'black': 'white',
        color: darkTheme? 'white':'black',
        padding: '10px'
    }
    return <React.Fragment>
        <div style={style}>
            <p>{'Custom Hook using useContext hook'}</p>
            <button onClick={toggleTheme}>Change Theam</button>
        </div>
    </React.Fragment>
}