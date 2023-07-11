import Recipe from "./components/Recipe";

function App() {
  return (
    <div className="App">
        <div>
            <img src={ingredientImage} alt="ingredient"/>
            <img src={burgerImage} alt="burger"/>
            <img src={vegetableImage} alt="vegetable"/>
        </div>
        <Recipe/>
    </div>
  );
}

export default App;
