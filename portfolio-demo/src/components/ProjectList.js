import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {
	//create state to keep track of what phase to currently filter by
	//start of with null since null will represent all projects
	const [phase, setPhase] = useState(null) 
	const handleClick = (newPhase) => {
		setPhase(newPhase)
	}

	//create brand new array with projects that ONLY match 'phase' state
	//setPhase causes page to re-render thus the code below will run again
	//that's why our filteredProjects will always align with the current state
	const filteredProjects = projects.filter(project => {
		//always return true on null (since null is for all projects)
		if(project.phase === phase || phase === null){
			return true
		}
		return false
	})

	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				{/*✅ 3a. create buttons to represent each phase to filter by */}
				{/*✅ 3c. add onclick events to each button to update phase state */}
				<div className="filter">
					<button onClick={() => handleClick(null)}>All</button>
					{/* handleClick takes an argument so that we need to wrap handleClick(i) in a callback function such that we don't end up invoking handleClick(i) */}
					<button onClick={() => handleClick(5)}>Phase 5</button>
					<button onClick={() => handleClick(4)}>Phase 4</button>
					<button onClick={() => handleClick(3)}>Phase 3</button>
					<button onClick={() => handleClick(2)}>Phase 2</button>
					<button onClick={() => handleClick(1)}>Phase 1</button>
				</div>
			</div>
			<ul className="cards">
				{/*use filteredProjects instead of all the projects passed in via props*/}
				{filteredProjects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
