import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealInstructions = () => {
    const { index } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${index}`);
                const data = await response.json();
                if (data.meals && data.meals.length > 0) {
                    setMeal(data.meals[0]);
                } else {
                    setMeal(null);
                }
            } catch (error) {
                console.error('Error fetching meal:', error);
                setMeal(null);
            }
        };

        fetchMeal();
    }, [index]);

    if (!meal) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt="Meal" className="img-fluid" style={{ marginBottom: '20px' }} />
                    <h3>Instructions:</h3>
                    <p>{meal.strInstructions}</p>
                    <a href={meal.strYoutube} className="btn btn-primary">Watch Recipe Video</a>
                </div>
            </div>
        </div>
    );
};

export default MealInstructions;
