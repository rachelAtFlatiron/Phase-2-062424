import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import CreateProject from "./pages/CreateProject";
import EditProject from "./pages/EditProject";

// ✅  1. Create routes.js
// ✅  1a. In `routes.js` create an array for routes.
// ✅  1b. Make a route for `<App />`
// ✅  1c. For the `<App />` route create an array of children that represent all the pages (Home, About, Projects, etc.)


const routes = [
    {
        path: '/',
        element: <App />,
        //most specific to least specific routes
        children: [
            {
                path: '/',
                element: <Home />
            },
        
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects/new',
                element: <CreateProject />
            },
            {
                path: '/projects/:id/edit',
                element: <EditProject />
            },
            {
                path: '/projects/:id',
                element: <ProjectDetails />
            },
            {
                path: '/projects',
                element: <ProjectsPage />
            }
        ]
    }
]

export default routes 