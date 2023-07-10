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
            <div>
                <form onSubmit={handleSubmit}>
                    <input value={query}             placeholder="Search recipe"
                    style={{
                        padding: "7px",
                        backgroundColor: "white",
                        width: "30%",
                        fontSize: "14px",
                        border: "none",
                        borderBottom: "0.2px solid #ffff",
                    }} 
                    onChange={(e) => setQuery(e.target.value)}/>
                    <button
                        type="submit"
                        style={{
                        margin: "10px",
                        backgroundColor: "#805190",
                        color: "white",
                        padding: "8px 18px",
                        border: "none",
                        fontSize: "14px", 
                        fontWeight: "300"
                        }}
                    >
                        Search
                    </button>
                </form>
                {data.map((rec, index) => (
                    <div key={index}>
                        <img src={rec['recipe']['image']} alt={rec['recipe']['label']}/>
                        <p>{rec['recipe']['label']}</p>
                        {rec['recipe']['ingredientLines'].map((line, lineIndex)=>(
                            <p key={lineIndex}>{line}</p>
                        ))}
                        {rec['recipe']['ingredients'].map((ingredient, ingredientIndex) => (
                            <p key={ingredientIndex}>{ingredient.text}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recipe;