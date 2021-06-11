import React from "react";

const Item = ({itemDetails}) =>{
    console.log(itemDetails)
    return(
        <div className="productDetails">
            
            <figure className="productimg">
                <img src={itemDetails.image}></img>
            </figure>
            <div className="productExtraDetails">
                <span className="productname">{itemDetails.itemName}</span>
                <p>{itemDetails.description}</p>
                <span className="price">price: {itemDetails.price}</span>
                <button>Buy</button>
            </div>
        </div>
    )
}

export default Item;