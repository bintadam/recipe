import heroImage from "../images/images.jpeg";
function Home() {
  return (
    <div className="relative">
            <div className="absolute left-25">
                <h1 className=" text-3xl p-6 text-white font-thin ">" Search for simple & <br></br>healthy delicious <br></br>recipes fo enjoy "</h1>
                <p className="bg-white px-0 py-4">Get the recipe now </p>
        </div>
        <img  className="bg-cover bg-no-repeat" src={heroImage} alt="ingredient"/>
    </div>
  );
}

export default Home;