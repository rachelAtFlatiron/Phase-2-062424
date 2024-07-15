import Header from "./components/Header";
import ProjectList from "./components/ProjectList"
import ProjectForm from "./components/ProjectForm"
import projects from './projects'

//✅ 1. create child components
//✅ 1a. create a header component
//✅ 1b. create a project form component
//✅ 1c. create a project list component

// `Hi my name is ${myName}`
function App(){
    return(
        <div>
            <Header />
            <ProjectForm />
            <ProjectList projects={projects} />
        </div>
    )
}

//✅ 1d. provide an array of projects to the project list

//✅ 2. create a project list component
//✅ 2a. accept the projects array as props
//✅ 2b. display each project title in an li element


//✅ 3. define ProjectListItem
//✅ 3a. accept the props argument
//✅ 3b. destructure the props object
//✅ 3c. display info of project object


export default App;
