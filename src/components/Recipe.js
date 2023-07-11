import axios from "axios";
import { useState } from "react";

function Recipe(){
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");


    const fetchData = async() => {
        const appId = "f41fd6ca"
        const apiKey = "bf0acb16afc9e3c4872b10e28feb17e2"

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

            <div className=" py-4 bg-slate-900">

                <form onSubmit={handleSubmit} className=" inline-block items-center">

                    <input value={query}  placeholder="Search recipe" 

                        onChange={(e) => setQuery(e.target.value)} className="border-0 p-1  border-b-2 bg-slate-900 text-white"/>

                    <button className="bg-slate-100 border-0 py-1 px-4 font-base ">

                        Search
                    </button>

                </form>
                <div className="grid grid-cols-2 px-24 w-full text-white">
                    {data.map((rec, index) => (
                        <div key={index} className="p-4  border-0  rounded-sm bg-slate-800  w-4/5  m-4 opacity-80" >
                            <div className="block">
                                <img src={rec['recipe']['image']} alt={rec['recipe']['label']} className=" w-24 rounded-full "/>
                            </div>

                            <div>

                                <p className="text-base font-base mt-4 underline">{rec['recipe']['label']}</p>
                                {rec['recipe']['ingredientLines'].map((line, lineIndex)=>(
                                <p key={lineIndex} className="font-thin text-sm">{line}</p>
                            ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Recipe;