import React from "react";
import "./home.css"
import { useLocation } from "react-router-dom";
import Item from "../../Components/Item"

const Home = () =>{
    const [items, setItems] = React.useState([]);
    const location = useLocation();
    React.useEffect(async()=>{
        const responce = await fetch("http://localhost:4000/api/v1/get-items-data", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })
        const data = await responce.json()
           setItems(data)
           
    }, [])

    
    return(
        <div className="home">
        <div className="heading">
            <h1>Shop</h1>
        </div>
            <div className="allProduct">
                {items.map((item, index)=> <Item key={`${item.recipeName}-${index}`} itemDetails={item}/>)}
            </div>
           
        </div>

    )
}

export default Home;