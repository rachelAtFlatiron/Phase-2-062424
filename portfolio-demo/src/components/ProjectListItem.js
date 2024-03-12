import { useState } from "react";

function ProjectListItem({ project }) {
	let { name, about, image, claps, link, phase } = project;

	//✅ 2b. create state for claps
	const [cardClaps, setCardClaps] = useState(claps)

	//✅ 2c. create callback to update clap state on button click
	const handleClick = () => {
		let newClaps = cardClaps + 1 
		setCardClaps(newClaps)
		
		//setCardClaps(prevCardClaps => prevCardClaps + 1)
	}

	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
				{ /*✅ 2a. create a clap button */ }
				{ /*✅ 2d. attach an event handler to the button */ }
				<button className="claps" onClick={handleClick}>👏{cardClaps}</button>
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
