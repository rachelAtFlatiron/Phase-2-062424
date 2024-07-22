import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";

function App() {
	const url = "http://localhost:4000/projects";
	const [darkMode, setDarkMode] = useState(true);
	const [projects, setProjects] = useState([]);

	console.log("outside effect");
	useEffect(() => {
		console.log("useeffect");
		fetch(url)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					//runs if we reached server but server came back with a bad status code such as a 404
					throw Error("something went wrong");
				}
			})
			//setProjects causes projects to update causing a re-render (i.e. all the code will run again except for the useeffect due to the empty dependency array)
			.then((data) => setProjects(data))
			//.catch will run if we can't reach the server at all (such as if it were switched off)
			.catch((err) => console.error(err));
		//empty dependency array so that useEffect runs once and only one on the first intial render
	}, []);

	const updateDarkMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	const addProject = (project) => {
		setProjects([...projects, project]);
	};

	return (
		<div className={darkMode ? "App" : "App light"}>
			<Header handleClick={updateDarkMode} darkMode={darkMode} />
			<ProjectForm addProject={addProject} url={url} />
			<ProjectList projects={projects} />
		</div>
	);
}

export default App;
