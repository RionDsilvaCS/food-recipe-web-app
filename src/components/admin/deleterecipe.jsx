import React, { useState } from 'react'
import axios from 'axios'

export default function deleterecipe() {
  const [resSuccessD, setResSuccessD] = useState(false);
  const [resErrorD, setResErrorD] = useState(false);
  
    const handleSubmit = (event) => {

        event.preventDefault();
    
        const  headers = {
            "auth-token": localStorage.getItem('token')
        }
    
        const recipe = {
          "recipe_name": event.target.recipe_name.value
        }

        console.log(recipe)
        axios.post('https://food-recipe-api-for-assin.onrender.com/api/recipe/delete-recipe', recipe, {headers})
            .then(response => {
    
              console.log(response);
              setResSuccessD(true);
       
            })
            .catch(error => {
                console.error('There was an error!', error);
                setResErrorD(true);
            });
      };

  return (
  
      <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name</label><br/>
          <input type="text" name="recipe_name" required />
        </div>
        <div>
          <center><input type="submit" value="Delete" className='submit-btn'/> </center>
        </div>
      </form>
      {resSuccessD ?
      <p>Successfully Deleted the recipe</p>:<div></div>}
      {resErrorD ?
      <p>Recipe does not exist</p>:<div></div>}
    </>
 
  )
}
