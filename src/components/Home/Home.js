import {GoArrowRight} from "react-icons/go"
import {useNavigate} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';
import "./Home.css"


function Home() {
    const navigate = useNavigate()

    const isDesktop = useMediaQuery({query: "(min-width : 1224px)"});
    const isMobile = useMediaQuery({query: '(max-width: 1223px )'})

    const handleClick =(event) => {
        event.preventDefault();
        navigate(event.currentTarget.getAttribute("href"));

    }
  return (
    <div className="font-['Open Sans']">
      {isDesktop && (
        <div className="bg-hero bg-cover bg-no-repeat h-screen px-24 py-72">
          <p className=" text-5xl text-slate-100 font-base tracking-wide">Search for simple & healthy  <br></br>  delicious recipes for you to enjoy <br></br> and bring smile on the faces around <br></br> you through our easiest recipes</p>

          <a className="inline-flex bg-white px-8 my-12 text-2xl font-semibold py-4 text-slate-800" href="/recipe" onClick={handleClick}>RECIPE<GoArrowRight className="m-1"/> </a>
        </div>
      )}
      {isMobile && (
        <div className="bg-hero bg-cover bg-center bg-no-repeat h-screen py-52 px-24">
          <p className=" text-3xl text-slate-100 font-thin tracking-wide">Search for simple & healthy delicious recipes for you to enjoy  and bring smile on the faces around <br></br> you through our easiest recipes</p>

          <a className="inline-flex bg-white px-8 my-4 text-xl font-semibold py-4 text-slate-800" href="/recipe" onClick={handleClick}>RECIPE<GoArrowRight className="m-1"/> 
          </a>
        </div>
      )}
    </div>
  );
}

export default Home;