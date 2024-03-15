import { useState } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projectsData from './projects'

//✅ 1. Create a ProjectForm component that will create a new project
function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [phaseState, setPhase] = useState(0)
  const [filter, setFilter] = useState('')
  //create state for projects so that we can update projects list with new projects 
  const [projects, setProjects] = useState(projectsData)
  const updatePhase = (phaseNumber) => {
		setPhase(phaseNumber)
	}

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const addProject = (newProject) => {
    setProjects([...projects, newProject])
  }

  const deleteProject = (projectId) => {
    console.log(projectId)
    const updateProjects = projects.filter((project) => {
      return project.id !== projectId
    })
    setProjects(updateProjects)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header handleClick={updateDarkMode} darkMode={darkMode} />
      <ProjectForm addProject={addProject} handleFilterChange={handleFilterChange} filter={filter}/>
      <ProjectList phaseState={phaseState} updatePhase={updatePhase} projects={projects} deleteProject={deleteProject} filter={filter}/>
    </div>
  );
}


export default App;
