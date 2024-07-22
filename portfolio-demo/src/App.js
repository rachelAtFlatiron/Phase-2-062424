import { useState, useEffect } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import ProjectEditForm from './components/ProjectEditForm';

// ✅ 1. Create a ProjectEditForm component
function App() {
  const url="http://localhost:4000/projects"
  // ✅ 2. Create state in App to represent the project to edit
  // ✅ 2a. Add a button to ProjectListItem that, when clicked on, will:
  // ✅ - update said state with the appropriate project object
  // ✅ - display the ProjectEditForm with the appropriate data.
  const [darkMode, setDarkMode] = useState(true)
  const [ projects, setProjects ] = useState([])
  const [projectToEdit, setProjectToEdit] = useState({
    id: 0,
    name: '',
    about: '',
    phase: 0,
    link: '',
    image: '',
    claps: 0
  })

  useEffect(() => {
    loadProjects()
  }, []) 

  const loadProjects = () => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const updateProjectToEdit = (project) => {
    setProjectToEdit(project)
  }

  const addProject = (project) => {
    setProjects([...projects, project])
  }

  const updateProject = (updatedProject) => {
    //map over projects, and replace the project with the matching id
    setProjects(
      projects.map(el => {
        //if el.id matches project.id, return update projects (project)
        if(el.id === updatedProject.id){
          return updatedProject
        //else return current el to keep it in state (since we are creating a brand new array)
        } else {
          return el
        }
      })
    )
  }

  const deleteProject = (id) => {
    setProjects(projects.filter(el => {
      //if id does not match, return true
      if(el.id !== id){
        return true
      }
      //if id does match, return false to filter out of projects
      return false
    }))
  }
  
  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header handleClick={updateDarkMode} darkMode={darkMode} />
      <ProjectForm addProject={addProject} />
      <ProjectEditForm projectToEdit={projectToEdit} url={url} updateProject={updateProject} />
      <ProjectList deleteProject={deleteProject} projects={projects} updateProjectToEdit={updateProjectToEdit} />
    </div>
  );
}


export default App;
