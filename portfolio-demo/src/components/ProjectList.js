import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {

	//state -> event handler updates state -> attach event handler to event in JSX (onClick, onSubmit, etc) -> user triggers event  -> event handler updates state (forcing a rerender i.e. for all the code in the component to run again)

	//create state to inform what phase we should filter by
	const [phase, setPhase] = useState(0)
	//create callback to update state when phase buttons are clicked
	//filter through projects by phase
	const updatePhase = (newPhase) => {
		//when invoked setPhase will rerun all code in component with new phase number
		setPhase(newPhase)
	}
	
	//make sure to pass filtered projects to JSX
	const filteredProjects = projects.filter((curProject) => (curProject.phase === phase) || phase === 0)

	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				{/*✅ 3a. create buttons to represent each phase to filter by */}
				{/*✅ 3c. add onclick events to each button to update phase state */}
				<div className="filter">
					<button onClick={() => updatePhase(0)}>All</button>
					<button onClick={() => updatePhase(5)}>Phase 5</button>
					<button onClick={() => updatePhase(4)}>Phase 4</button>
					<button onClick={() => updatePhase(3)}>Phase 3</button>
					<button onClick={() => updatePhase(2)}>Phase 2</button>
					<button onClick={() => updatePhase(1)}>Phase 1</button>
				</div>
			</div>
			<ul className="cards">
				{filteredProjects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
