import { useState } from "react";
//✅ 2. Make the ProjectForm component a controlled component
//✅ 3. Handle submitting the form and update state in parent using inverse data flow

//~~~~~~~~~~~~~~~~need two things for controlled components:
//1. onChange event handler to update state
//2. to reflect state in input's value
function ProjectForm({ addProject, handleFilterChange, filter }) {
	//✅ 2a. Initialize state for all the form fields found in the component
	const [name, setName] = useState("type name here");
	const [about, setAbout] = useState("");
	const [phase, setPhase] = useState("");
	const [homepage, setHomepage] = useState("");
	const [screenshot, setScreenshot] = useState("");


	const initialForm = {
		//key/value pairs for my input values
		//key - represent the input name
		//value - represent whatever the user typed in
		name: "",
		about: "",
		phase: "",
		link: "",
		image: "",
	};
	// ~~~~~~~~~~~~~~~ the keys you are going to get from inputs' 'name' property
	const [form, setForm] = useState(initialForm);

	//✅ 2b. Add an onChange event to each field that will update state associated to the field that is interacted with
	//✅ 2c. Provide a value attribute to each form field that will return the associated piece of state

	// const handleNameChange = (e) => {
	// 	//e.target.value
	// 	setName(e.target.value);
	// };

	const handleSubmit = (e) => {
		e.preventDefault(); //~~~~~~~~~~~still need e.preventDefault()
		addProject(form); //pass in state
		setForm(initialForm);
	};

	const handleChange = (e) => {
		//1. get the new value from e (which also saves the name of the input)
		let newVal = e.target.value;
		let inputName = e.target.name;

		console.log(newVal, inputName);
		//2. use setForm
		setForm({
			//~~~~~~~~~~~~~spitting all key/value pairs out to rebundle them in a new object
			...form,
			[inputName]: newVal, //overwriting previous value of input we are updating
		});

		// setForm({
		// 	...form,
		// 	[e.target.name]: e.target.value
		// })
	};

	//✅ 2d. Add an onSubmit event handler to the form
	//✅ 3a. Use inverse data flow to include the new project in the projects state in App
	/*~~~~~~~~~~~~~~~~~~ DON'T FORGET TO HAVE FORM REFLECT WHAT IS SAVED IN STATE */
	return (
		<section>
			<form
				className="form"
				autoComplete="off"
				onSubmit={(e) => handleSubmit(e)}
			>
				<h3>Add New Project</h3>

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
					onChange={(e) => handleChange(e)}
					value={form.about}
				/>

				<label htmlFor="phase">Phase</label>
				<select
					name="phase"
					id="phase"
					onChange={(e) => handleChange(e)}
					value={form.phase}
				>
					<option value="">Pick a Phase</option>
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
					onChange={(e) => handleChange(e)}
					value={form.link}
				/>

				<label htmlFor="image">Screenshot</label>
				<input
					type="text"
					id="image"
					name="image"
					onChange={(e) => handleChange(e)}
					value={form.image}
				/>

				<button type="submit">Add Project</button>
			</form>

			<input
				type="text"
				placeholder="Search..."
				name="search"
				value={filter}
				onChange={(e) => handleFilterChange(e)}
			/>
		</section>
	);
}

export default ProjectForm;

/*

controlled form process

1. make state that represents form values (and ultimately the structure of what gets added to the database)
2. add value to each JSX input so that it displays what is in state ( value = {formState.name} )
3. create onChange callback to dynamically update form state { ...form, [e.target.name]: e.target.value }
4. add onChange to every input field
5. create onSubmit callback that adds form values to appropriate place, reset form (state)
- don't forget your e.preventDefault()

*/
