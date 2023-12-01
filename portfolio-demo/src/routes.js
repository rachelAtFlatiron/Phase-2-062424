import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import CreateProject from "./pages/CreateProject";
import EditProject from "./pages/EditProject";

// ✅  1. Create routes.js
// ✅  1a. In `routes.js` create an array for routes.
const routes = [
    // ✅  1b. Make a route for `<App />`
    {
        path: '/', 
        element: <App />,
        //🛑 children is for having the Header on every page, meant to be used with <Outlet /> in App.js
        //🛑 demonstrate without children to show how Header won't be on every page
        children: [
            {
                // ✅  1c. For the `<App />` route create an array of children that represent all the pages (Home, About, Projects, etc.)
                path: "/",
                element: <Home />,
                //errorElement: <ErrorPage />
            },
            {
                path: "/about",
                element: <About />,
                //errorElement: <ErrorPage />
            },
            {
                path: "/projects",
                element: <ProjectsPage />,
                //errorElement: <ErrorPage />
            },
            {
                path: "/projects/:id",
                element: <ProjectDetails />,
                //errorElement: <ErrorPage />
            },
            {
                path: "/projects/:id/edit",
                element: <EditProject />
            },
            {
                path: "/new",
                element: <CreateProject />,
            },
            {
                path: "/edit/:id",
                element: <EditProject />,
            }
        ]
    }
]


export default routes;
