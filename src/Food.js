import React, { useState, useEffect } from 'react';
 
export default function FoodItems() {
  const Food= 'https://api.spoonacular.com/recipes/complexSearch';
  const [state, setState] = useState([]);
 
  useEffect(() => {
    fetch(Food)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setState(data.meals);
      })
     
  })
 
  return (
    <>
       <div className='container-fluid'>
      <div className='row'>
        {state.map((article, index) => (
          <div key={index} className='col-md-3 '>
            <div className="card" style={{height:'100%', overflow:'auto', marginTop:'10px'}}>
              <img src={article.urlToImage} className="card-img-top" alt="News" />
              <div className="card-body">
               <div className='scroll'>
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}