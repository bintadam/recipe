import axios from "axios";
import { useState } from "react";

function Recipe(){
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [list, setList] = useState("alcohol-free");

    const appId = "c2de284e"
    const apiKey = "1aab020382a4c2bdd14e08d165139f40";

    const fetchData = async() => {
        const response = await axios.get(`https://api.edamam.com/search?q=${searchString}app_id=${appId}&app_key=${apiKey}&health=${list}`)
        setData(response.data.hits)
        console.log(response.data)
    }
    return (
        <div></div>
    )
}

export default Recipe;