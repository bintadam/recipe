import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import './components/Home/Home.css'

function App() {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Recipe</Link></li>
        </ul>
       </nav> */}
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/recipe"  element={<Recipe />} />
      </Routes>
    </Router>
  )
}

export default App;
