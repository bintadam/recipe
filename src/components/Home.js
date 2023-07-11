import heroImage from "../images/images.jpeg";
function Home() {
  return (
    <div className="relative">
        <img  className="bg-cover bg-no-repeat" src={heroImage} alt="ingredient"/>
        <h1 className="flex absolute top-20  text-3xl p-6 font-thin text-white">" Search for simple & healthy delicious recipes fo enjoy "</h1>
    </div>
  );
}

export default Home;