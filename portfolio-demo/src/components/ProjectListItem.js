import React from "react";

function ProjectListItem({ project }) {
	return (
		<li className="card">
			<figure className="image">
				<img src={project.image} alt={project.name} />
				<button className="claps">👏{project.claps}</button>
			</figure>
			<section className="details">
				<h4>{project.name}</h4>
				<p>{project.about}</p>
				<p>
					<a href={project.link}>Link</a>
				</p>
			</section>

			<footer className="extra">
				<span className="badge blue">Phase {project.phase}</span>
			</footer>
		</li>
	);
}

export default ProjectListItem;
