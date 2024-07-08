import { useState } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projects from "./projects";

// ✅ 1. Use inverse data flow to implement Light-Dark mode
// ✅ 1a. Move the dark mode button to `Header`
// ✅ 1b. Create a callback function that updates `isDarkMode` and pass the callback function as a prop to the `Header` component

function App() {
	const [darkMode, setDarkMode] = useState(true);

	// ✅ 2b. Write a callback function inside the App component:
	// ✅ - pass the callback function down as a prop to `ProjectList`

	const handleClick = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	return (
		<div className={darkMode ? "App" : "App light"}>
			<Header />
			<button onClick={handleClick}>
				{darkMode ? "Light Mode" : "Dark Mode"}
			</button>
			<ProjectForm />
			<ProjectList projects={projects} />
		</div>
	);
}

export default App;

/*
inverse flow

1. parent component
- create state
- create callback that updates state

2. parent -> child
- pass down state
- pass down callback

3. child -> parent
- child triggers callback (through an event)
- results in setState in parent
- results in a state change -> re-render
*/