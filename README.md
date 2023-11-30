# Client Side Routing

## SWBATs:

- [ ] Review the difference between server-side and client-side routing
- [ ] Observe a refactor to include client-side routing using React Router V6
- [ ] Observe how to use the react-router-dom hook useParams

---

## Planning

What URLs do we want our application to have to simulate the feeling of different "pages"?

| Component       | Url                |
| --------------- | ------------------ |
| Home            | / (root route)     |
| About           | /about             |
| CreateProject     | /projects/new      |
| EditProject | /projects/:id/edit |
| ProjectDetail   | /projects/:id      |
| ProjectPage     | /projects          |

🛑🛑🛑🛑🛑<strong>THESE ARE DIFFERENT THAN THE SERVER ROUTES</strong>🛑🛑🛑🛑🛑

---

## Deliverables

#### 1. Create `routes.js`.
##### 1a. In `routes.js` create an array for routes.
##### 1b. Make a route for `<App />`
##### 1c. For the `<App />` route create an array of children that represent all the pages (Home, About, Projects, etc.)

<br /> 

#### 2. Create a `RouterProvider` in `index.js`.
##### 2a. Import `createBrowserRouter` and `RouterProvider`.
##### 2b. Create a router with `createBrowserRouter` that accepts `routes` from `routes.js`.
##### 2c. Render `RouterProvider` in the root.


<br />

#### 3. Update `App.js` to include `Header` on every page.
##### 3a. Import `Outlet` from `react-router-dom`.
##### 3b. Include the `Outlet` component in the `JSX`.

<br />

#### 4. Add `NavLink`'s throughout the site.
##### 4a. Add `NavLink`s in `Header`.
##### 4b. In `Home` add `NavLink` to button `View All Projects`.  Direct it to `/projects`.

<br /> 

#### 5. Update `ProjectListItem`
##### 5a. Create a `NavLink` for each project that redirects to `ProjectDetails`. 
##### - The link is to `/projects/:id`
##### 5b. Use a fetch request in `ProjectDetails` to access a single project.  Use `useParams` to access the id.

<br />


#### 6. Manage delete project.
##### 6a. On successful `DELETE` request redirect to `/projects`.

<br />

#### 7. Manage edit project.
##### 7a. On edit button click redirect to `/projects/:id/edit`
##### 7b. On successful `PATCH` request redirect to `/projects/:id`.

<br />

#### 8. Manage create project.
##### 8a. On successful form submission redirect to `/projects/:id`.

