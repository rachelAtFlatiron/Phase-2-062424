import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

// ✅ 2. Refactor the phase filter component out of `ProjectList` and implement inverse data flow
// ✅ 2a. Move the `phase` state from `ProjectList` to `App`
function ProjectList({ projects }) {

	const [phaseState, setPhase] = useState(0);

	function handleClick(phaseNumber) {
		setPhase(phaseNumber);
	}

	const filteredProjects = projects.filter(
		(project) => phaseState === 0 || project.phase === phaseState
	);

	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				{/* ✅ 2c. Using inverse data flow, get the value of the phase from ProjectList UP to the App component */}
				{/* ✅ - Invoke the callback function from the onClick event listener */}
				<button onClick={() => handleClick(0)}>All</button>
				<button onClick={() => handleClick(5)}>Phase 5</button>
				<button onClick={() => handleClick(4)}>Phase 4</button>
				<button onClick={() => handleClick(3)}>Phase 3</button>
				<button onClick={() => handleClick(2)}>Phase 2</button>
				<button onClick={() => handleClick(1)}>Phase 1</button>
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