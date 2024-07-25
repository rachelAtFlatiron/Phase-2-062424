import React from "react";
import { NavLink } from 'react-router-dom'

// ✅ 4. Add `NavLink`'s throughout the site.
// ✅ 4a. Add `NavLink`s in `Header`.
// ✅ 4b. In `Home` add `NavLink` to button `View All Projects`.  Direct it to `/projects`.
function Header({ updateDarkMode, darkMode }) {
	return (
		<header>
			<h1>
				<span className="logo">{"//"}</span>
				Project Showcase
			</h1>
			<button onClick={updateDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
			<NavLink to={'/'} className="button">
				Home
			</NavLink>
			<NavLink to={'/about'} className="button">
				About
			</NavLink>
			<NavLink to={'/projects/new'} className="button">
				New Project
			</NavLink>
			<NavLink to={'/projects'} className="button">
				All Projects
			</NavLink>
		</header>
	);
}

export default Header;
