import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {

	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				{/*✅ 3a. create buttons to represent each phase to filter by */}
				{/*✅ 3c. add onclick events to each button to update phase state */}
				<div className="filter">
					<button>All</button>
					<button>Phase 5</button>
					<button>Phase 4</button>
					<button>Phase 3</button>
					<button>Phase 2</button>
					<button>Phase 1</button>
				</div>
			</div>
			<ul className="cards">
				{projects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
