import React, { useState } from 'react';
import './App.css';
import FunctionalComponent from './FunctionalComponent';

export const ThemeContext = React.createContext(); 
//context create pannum. themprovider kuduthu value thantha athukulla irukura component la irukkura ellathum value props ah pass akirum 

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
  
  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button> 
      <FunctionalComponent />
      </ThemeContext.Provider>
    </div>
  )
}

export default App

