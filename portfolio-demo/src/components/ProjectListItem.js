import { useState } from "react";

function ProjectListItem({ project }) {
	let { name, about, image, claps, link, phase } = project;

	//initial state: claps from projects.js
	const [projectClaps, setClaps] = useState(claps)
	//event handler to update claps 
	const updateClaps = () => {
		setClaps(prevClaps => prevClaps + 1)
	}
	//attach event handler to an onClick event and update claps state
	//state change forced a re-render and will therefore show the new state

	//✅ 2b. create state for claps

	//✅ 2c. create callback to update clap state on button click


	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
				{ /*✅ 2a. create a clap button */ }
				{ /*✅ 2d. attach an event handler to the button */ }
				<button onClick={updateClaps} className="claps">👏</button>
			</figure>
			<section className="details">
				<h4>{name}</h4>
				<p>{about}</p>
				<p>
					<a href={link}>Link</a>
				</p>
			</section>

			<footer className="extra">
				<span className="badge blue">Phase {phase}</span>
			</footer>
		</li>
	);
}

export default ProjectListItem;
