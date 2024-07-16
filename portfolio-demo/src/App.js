import { useState } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projects from "./projects.js";



//✅ 1. create a dark mode button in App
function App() {
	//✅ 1a. initialize darkMode state
	//✅ 1b. callback to toggle and set dark mode state

	//we need state because the variable dark should be changing over time
	//rerender === updating the DOM to reflect the new state 


	//dark/light mode are meant to change over time
	//therefore we need to use react state
	//react state will also let the DOM know when to update as our dark/light mode changes
	//dark/light mode will rely on the previous version of the state
	//therefore we need to use a callback in our state setter to access the previous value as opposed to changing the previous value directly

	const [darkMode, setDarkMode] = useState(true)
	
	const handleClick = () => {
		//change darkMode
		//darkMode relies on the previous version of dark mode so we need to use our setter function callback function
		setDarkMode(prevDarkMode => !prevDarkMode)
	}

	return (
		<div className={`App ${!darkMode ? 'light' : ''}`}>
			<Header />
			{/*✅ 1c. add click event to button*/}
			<button onClick={handleClick}>{!darkMode ? 'Dark' : 'Light'} Mode</button>
			<ProjectForm />
			<ProjectList projects={projects} />
		</div>
	);
}
export default App;
