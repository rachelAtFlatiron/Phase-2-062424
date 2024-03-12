import { useState } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projects from "./projects.js";



//✅ 1. create a dark mode button in App
function App() {
	//✅ 1a. initialize darkMode state
	const [darkMode, setDarkMode] = useState(true)
	//✅ 1b. callback to toggle and set dark mode state

	const handleClick = () => {
		//need to rely on previous state (true/false) to get new state
		let prevDarkMode = !darkMode //get new state value
		setDarkMode(prevDarkMode) //update state with NEW state value
		//setDarkMode(prevDarkMode => !prevDarkMode)
	}

	return (
		<div className={`App ${darkMode ? 'light' : ''}`}>
			<Header />
			{/*✅ 1c. add click event to button*/}
			<button onClick={handleClick}>Light Mode</button>
			<ProjectForm />
			<ProjectList projects={projects} />
		</div>
	);
}
export default App;
