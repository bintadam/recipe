import axios from "axios";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import './Recipe.css'
import {GoSearch} from "react-icons/go"


function Recipe(){
    const isDesktop = useMediaQuery({query: "(min-width : 1224px)"});
    const isMobile = useMediaQuery({query: '(max-width: 1224px)'})

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");


    const fetchData = async() => {
        const appId = process.env.REACT_APP_APP_ID;
        const apiKey = process.env.REACT_APP_API_KEY;

        const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&health=alcohol-free`)
        setData(response.data.hits)
        console.log(response.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData()
    }

    if(!data){
        return <div>Loading...</div>
    }

    return (
        <div>
            { isDesktop && (

                <div>

                    <form onSubmit={handleSubmit} className="flex wrap justify-center items-center py-16">

                        <input value={query}  placeholder="Search recipe" 
                            type="text"
                            onChange={(e) => setQuery(e.target.value)} className="border-0 bg-slate-100 text-black border-none focus:outline-none text-xl w-1/3 p-1 h-12 font-thin"/>

                        <button className="bg-slate-100 ml-4 border-0 p-4 font-base text-lg">
                            <GoSearch/>
                        </button>

                    </form>
                    <div className="grid grid-cols-3 px-24 w-full text-white">
                        {data.map((rec, index) => (
                            <div key={index} className="p-4  border-0  rounded-sm bg-slate-800  w-4/5  m-4 opacity-80" >
                                <div className="block">
                                    <img src={rec['recipe']['image']} alt={rec['recipe']['label']} className=" w-24 "/>
                                </div>

                                <div>

                                    <p className="text-base font-thin mt-8 underline">{rec['recipe']['label']}</p>
                                    {rec['recipe']['ingredientLines'].map((line, lineIndex)=>(
                                    <p key={lineIndex} className="font-thin text-sm mt-2">{line}</p>
                                ))}

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            )}
            {isMobile && (
                <div>

                    <form onSubmit={handleSubmit} className="inline-block p-4">
            
                        <input value={query}  placeholder="Search recipe" 
                            type="text"
                            onChange={(e) => setQuery(e.target.value)} className="border-0 py-3 pr-12 pl-2 text-black border-none focus:outline-none text-base"/>
            
                        <button className="bg-slate-100 ml-1 mt-1 border-0 py-3 px-4 font-base text-medium">
                            Search
                        </button>
            
                    </form>
                    <div className="block px-6 w-full text-white">
                        {data.map((rec, index) => (
                            <div key={index} className="py-3 border-b mt-4 opacity-80" >
                                <div className="block">
                                    <img src={rec['recipe']['image']} alt={rec['recipe']['label']} className=" w-24"/>
                                </div>
            
                                <div>
            
                                    <p className="text-base font-base mt-4 underline">{rec['recipe']['label']}</p>
                                    {rec['recipe']['ingredientLines'].map((line, lineIndex)=>(
                                    <p key={lineIndex} className="font-thin mt-1 text-sm">{line}</p>
                                    ))}
            
                                </div>
            
                            </div>
            
                        ))}
            
                    </div>
            
                </div>
            )}

        </div>
    )
}

export default Recipe;