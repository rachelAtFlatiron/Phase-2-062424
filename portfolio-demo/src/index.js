import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes.js'
import './index.css';

// ✅ 2. Create a `RouterProvider` in `index.js`.
// ✅ 2a. Import `createBrowserRouter` and `RouterProvider`.
// ✅ 2b. Create a router with `createBrowserRouter` that accepts `routes` from `routes.js`.

// ✅ 2c. Render `RouterProvider` in the root.
//there are multiple types of routers that we can create
const router = createBrowserRouter(routes)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <RouterProvider router={router} />
)