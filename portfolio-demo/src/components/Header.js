import React from 'react'

function Header({ handleClick, darkMode }) {
  return (
    <header>
        <h1><span className="logo">{'//'}</span>Portfolio Showcase</h1>
        {/* ✅ 1c.  Inside the `Header` component, invoke the callback function to update state in `App` */}
        {/* handleClick is being invoked in the context of App.js because that is where handleClick was defined */}
        {/* we also need 'darkMode' to inform us what words to say on the button */}
        <button onClick={handleClick}>
				{darkMode ? "Light Mode" : "Dark Mode"}
			</button>
    </header>
  )
}

export default Header