import { useState, useEffect } from 'react'

//1. state
//2. adding values to the inputs
//3. onChange

function ProjectEditForm({ projectToEdit, url, updateProject }) {
	const [form, setForm] = useState(projectToEdit)

	//every time our prop changes we have to update form
	useEffect(() => {
		setForm(projectToEdit)
	//we are only setForm when our prop changes
	//our prop comes from state in App
	//App will be responsible for updating state
	//via the cb sent to ProjectListItem
	}, [projectToEdit])

	const handleChange = (e) => {
		setForm({
			...form, 
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		fetch(`${url}/${projectToEdit.id}`, {
			method: 'PATCH',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({
				...form,
				phase: parseInt(form.phase)
			})
		})
		.then(res => {
			if(res.ok){
				return res.json()
			} else {
				throw Error('patch failed')
			}
		})
		.then(data => {
			//send updated data up to App to update App's projects state 
			updateProject(data)
		})
		.catch(err => console.error('couldnt reach server'))

	}

	return (
		<form className="form" autoComplete="off" style={{"display": "flex"}} onSubmit={(e) => handleSubmit(e)}>
			<h3>Edit Project</h3>

			<label htmlFor="name">Name</label>
			<input
				type="text"
				id="name"
				name="name"
				value={form.name}
				onChange={(e) => handleChange(e)}
			/>

			<label htmlFor="about">About</label>
			<textarea
				id="about"
				name="about"
				value={form.about}
				onChange={(e) => handleChange(e)}
			/>

			<label htmlFor="phase">Phase</label>
			<select
				name="phase"
				type="number"
				id="phase"
				value={form.phase}
				onChange={(e) => handleChange(e)}
			>
				<option value="1">Phase 1</option>
				<option value="2">Phase 2</option>
				<option value="3">Phase 3</option>
				<option value="4">Phase 4</option>
				<option value="5">Phase 5</option>
			</select>

			<label htmlFor="link">Project Homepage</label>
			<input
				type="text"
				id="link"
				name="link"
				value={form.link}
				onChange={(e) => handleChange(e)}
			/>

			<label htmlFor="image">Screenshot</label>
			<input
				type="text"
				id="image"
				name="image"
				value={form.image}
				onChange={(e) => handleChange(e)}
			/>

			<button type="submit">Update Project</button>
		</form>
	);
}

export default ProjectEditForm;
