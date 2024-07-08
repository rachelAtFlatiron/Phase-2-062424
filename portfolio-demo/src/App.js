import { useState } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projects from "./projects.js";



//✅ 1. create a dark mode button in App
function App() {
	//✅ 1a. initialize darkMode state
	//✅ 1b. callback to toggle and set dark mode state

	return (
		<div className={`App ${'' ? 'light' : ''}`}>
			<Header />
			{/*✅ 1c. add click event to button*/}
			<button>Light Mode</button>
			<ProjectForm />
			<ProjectList projects={projects} />
		</div>
	);
}
export default App;
