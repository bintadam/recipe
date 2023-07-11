import heroImage from "../images/hero-photo.avif";
function Home() {
  return (
    <div className="bg-cover bg-no-repeat bg-slate-900 text-white">
        <h1 className="relative">Search for simple and delicious recipes to enjoy while keeping track of
        the calories</h1>
        <img src={heroImage} alt="ingredient"/>

    </div>
  );
}

export default Home;