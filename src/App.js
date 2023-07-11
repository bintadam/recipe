
import Link from "./components/Link";
import Route from "./components/Route";
import Home from "./components/Home";
import Recipe from "./components/Recipe";

function App() {
  return (
    <div>
      <Route path="/">
        <Home/>
      </Route>
      <Route path="/recipe">
        <Recipe/>
      </Route>
    </div>
  );
}

export default App;
