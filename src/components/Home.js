import heroImage from "../images/images.jpeg";
import {GoArrowRight} from "react-icons/go"
function Home() {
  return (
    <div className="relative font-['Open Sans']">
            <div className="absolute top-56 left-16 p-6">
                <p className=" text-5xl text-slate-100 font-thin tracking-wide">Search for simple & healthy  <br></br> delicious recipes for you to enjoy <br></br> and bring smile on the faces around <br></br> you through our easiest recipes</p>
                <p className="inline-flex bg-white px-8 my-16 text-2xl font-semibold py-4 text-slate-800">RECIPE<GoArrowRight className="m-1"/> </p>
        </div>
        <img  className="bg-cover bg-no-repeat h-screen" src={heroImage} alt="ingredient"/>
    </div>
  );
}

export default Home;