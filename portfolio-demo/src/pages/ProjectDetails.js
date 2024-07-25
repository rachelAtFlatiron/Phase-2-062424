import { useEffect, useState } from "react";
import ProjectListItem from "./ProjectListItem";
import { useParams } from "react-router-dom";

function ProjectDetails() {
	// ✅ 5b. Use a fetch request in `ProjectDetails` to access a single project.  Use `useParams` to access the id.

	const [project, setProject] = useState({});
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
    .then(res => res.json())
    .then(data => setProject(data))
  }, [])

	return (
		<div>
			<ProjectListItem project={project} />
		</div>
	);
}

export default ProjectDetails;
