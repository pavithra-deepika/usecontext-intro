import React from 'react'
import { useThemeConsumer } from './ThemeContext';
function FunctionalComponent() {
    // const darkTheme = useContext(ThemeContext);
    const {darkTheme, toggleTheme} = useThemeConsumer();


    const darkStyle = {
        backgroundColor: darkTheme ? 'Gray' : 'black',
        color: darkTheme ? 'green' : 'white',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <div style={darkStyle}>
            <h1> Functional Component</h1>
            <button onClick={toggleTheme}>Toggle Theme</button> 

        </div>
    )
}

export default FunctionalComponent