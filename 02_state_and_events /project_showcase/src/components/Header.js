import {useState} from "react";

const Header = () => {
  const [isDarkMode, setisDarkMode] = useState(true) //good idea to put states on top
  console.log(isDarkMode)

  function handleToggleDakrMode(){
    console.log("clicked")
    setisDarkMode(!isDarkMode) //bang operator since we already have a true value
  }
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDakrMode}>{isDarkMode ? 'Light Mode': 'DarkMode'}</button> 
    </header>
  );
}

export default Header;
