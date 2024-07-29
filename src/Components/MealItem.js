import React from "react";
//import './Components/style.css';
import './style.css';
const Mealitem=(getMeal)=>{
    console.log(getMeal.data)
    return(
        <>
             <div className="card">
                        <img src={getMeal.data.strMealThumb} alt="meal"/>
                        <div className ="info">
                        <h2>{getMeal.data.strMeal}</h2>
                        <p>{getMeal.data.strArea} food</p>
                        </div>
                       
            </div>  
        </>
    )
}
export default Mealitem;