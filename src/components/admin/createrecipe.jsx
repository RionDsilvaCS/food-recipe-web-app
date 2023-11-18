import React, { useState } from 'react'
import axios from 'axios'

export default function createrecipe() {
    const [resSuccess, setResSuccess] = useState(false);
    const [resError, setResError] = useState(false);


    const handleSubmit = (event) => {

        event.preventDefault();
    
        const  headers = {
            "auth-token": localStorage.getItem('token')
        }
        
        const recipe = {
          "recipe_name": event.target.recipe_name.value,
          "calorie": event.target.calorie.value,
          "image": event.target.image.value,
          "items": [
            {
              "item_name": event.target.item_name.value,
              "item_discription": event.target.item_des.value,
              "item_quantity": event.target.item_quan.value
            }
        ]
        }
        console.log(recipe)
        axios.post('https://food-recipe-api-for-assin.onrender.com/api/recipe/create-recipe', recipe, {headers})
            .then(response => {
    
              console.log(response);
              setResSuccess(true);
       
            })
            .catch(error => {
                console.error('There was an error!', error);
                setResError(true);
            });
      };

  return (
    
      <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name</label>
          <input type="text" name="recipe_name" required />
        </div>
        <div>
          <label>Calorie</label>
          <input type="text" name="calorie" required />
        </div>
        <div>
          <label>Image Link</label>
          <input type="text" name="image" required />
        </div>
        <div>
          <label>Item Name</label>
          <input type="text" name="item_name" required />
        </div>
        <div>
          <label>Item Description</label>
          <input type="text" name="item_des" required />
        </div>
        <div>
          <label>Item Quantity</label>
          <input type="text" name="item_quan" required />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      {resSuccess ? <p>Successfully created Recipe</p>: <div></div>}
      {resError ? <p>Failed to create Recipe</p>: <div></div>}
    </>
  
  )
}
