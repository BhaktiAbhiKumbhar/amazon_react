import React from "react";
import Records from './Data.json'
import "./css/Cloths.css"
function Cloths(){
    return(
        <div className="Products">
           {
            Records.map(record=>{
                return(
                    
                    <div className="product">
                        <img src={record.img} alt="productImg"/>
                        <h1>{record.Name}</h1>
                        <p>{record.Price}</p>
                        <button>Add to Cart</button>
        
                    </div>
                )
            })
           }
        </div>
    )
}

export default Cloths;