import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// ✅ 7. Manage edit project.
// ✅ 7a. On edit button click redirect to `/projects/:id/edit`. 
// ✅ 7b. On successful `PATCH` request redirect to `/projects/:id`.
function EditProject() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({});

	useEffect(() => {
		fetch(`http://localhost:4000/projects/${id}`)
			.then((res) => res.json())
			.then((data) => setFormData(data));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`http://localhost:4000/projects/${id}`, {
			method: 'PATCH',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify(formData)
		})
		.then(res => res.json())
		.then(data => {
			navigate(`/projects/${id}`)
		})
	};

	const handleOnChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form onSubmit={handleSubmit} className="form" autoComplete="off">
			<h3>Edit Project</h3>

			<label htmlFor="name">Name</label>
			<input
				type="text"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleOnChange}
			/>

			<label htmlFor="about">About</label>
			<textarea
				id="about"
				name="about"
				value={formData.about}
				onChange={handleOnChange}
			/>

			<label htmlFor="phase">Phase</label>
			<select
				name="phase"
				id="phase"
				value={formData.phase}
				onChange={handleOnChange}
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
				value={formData.link}
				onChange={handleOnChange}
			/>

			<label htmlFor="image">Screenshot</label>
			<input
				type="text"
				id="image"
				name="image"
				value={formData.image}
				onChange={handleOnChange}
			/>

			<button type="submit">Update Project</button>
		</form>
	);
}

export default EditProject;
