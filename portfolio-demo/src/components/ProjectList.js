import React from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {

	return (
        <ul>
            <h1>Projects</h1>
            {
                //we need to use .map because JSX expects an array (and .map returns an array)
                projects.map(curProject => {
                    return <ProjectListItem project={curProject} />
                })
                // {projectNames}
            }
        </ul>
    );
}

export default ProjectList;
