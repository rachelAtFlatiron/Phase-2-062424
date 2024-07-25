import { useState } from 'react'
import Header from "./pages/Header";
// ✅ 3. Update `App.js` to include `Header` on every page.
// ✅ 3a. Import `Outlet` from `react-router-dom`.
import { Outlet } from 'react-router-dom'
function App() {

  const [darkMode, setDarkMode] = useState(true)

  //created routes
  //hooked up routes to the router provider
  //we made children and used <Outlet> so that our header was always present on the page
  //used NavLink in header to create hyperlinks to different pages 
  //we used useParams to save and extract data from the url
  //we used useNavigate to navigate to other links programatically
  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header updateDarkMode={updateDarkMode} darkMode={darkMode} />
      {/* ✅ 3b. Include the `Outlet` component in the `JSX`. */}
      <Outlet />
    </div>
  );
}


export default App;
