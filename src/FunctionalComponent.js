import React, { useContext } from 'react'
import { ThemeContext } from './App'

function FunctionalComponent() {
    const darkTheme = useContext(ThemeContext);
    const darkStyle = {
        backgroundColor: darkTheme ? 'blue' : 'green',
        color: darkTheme ? 'green' : 'blue',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <div style={darkStyle}>
            <h1> Functional Component</h1>
        </div>
    )
}

export default FunctionalComponent