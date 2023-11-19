import {React, useState} from 'react'
import axios from 'axios'

export default function updaterecipe() {
    const [resOne, setResOne] = useState(false);
    const [resOneErr, setResOneErr] = useState(false);
    const [resSuccess, setResSuccess] = useState(false);
    const [resError, setResError] = useState(false);
    const url_link = 'https://food-recipe-api-for-assin.onrender.com/api/recipe/get-recipe/'

    const handleSubmit = (event) => {

        event.preventDefault();
    
        const  headers = {
            "auth-token": localStorage.getItem('token')
        }
        console.log(url_link + event.target.recipe_name.value)
        var url = `${url_link}${event.target.recipe_name.value}`

        axios.get(url, {headers})
            .then(response => {
    
              console.log(response);
              setResOne(true)
              setResSuccess(false)
       
            })
            .catch(error => {
                console.error('There was an error!', error);
                setResOneErr(true)
            });
      };

      const handleUpdate = (e) => {
        e.preventDefault();
    
        const  headers = {
            "auth-token": localStorage.getItem('token')
        }
        const recipe_update = {
            "recipe_name": e.target.recipe_name.value,
            "calorie": e.target.calorie.value
          }

          axios.put('https://food-recipe-api-for-assin.onrender.com/api/recipe/update-recipe', recipe_update , {headers})
            .then(response => {
    
              console.log(response);
              setResSuccess(true)
            })
            .catch(error => {
                console.error('There was an error!', error);
                setResError(true)
            });
            setResOne(false)
      }; 

  return (
    <>
    {
      resOne ?
      <div>
      <form onSubmit={handleUpdate}> 
        <div>
          <label>Recipe Name</label><br/>
          <input type="text" name="recipe_name" required />
        </div>
        <div>
          <label>Calorie </label><br/>
          <input type="text" name="calorie" required />
        </div>
        <div>
          <center><input type="submit" value="Update" className='submit-btn'/></center>
        </div>
      </form>
        
      </div>
      :
      <div>
      <form onSubmit={handleSubmit}> 
        <div>
          <label>Recipe Name</label><br/>
          <input type="text" name="recipe_name" required />
        </div>
        <div>
          <center><input type="submit" value="Find" className='submit-btn'/></center>
        </div>
      </form>
      {resOne ?
        <p>Search was successful</p>:<div></div>}
        {resOneErr ?
        <p>No such recipe exists</p>:<div></div>}
        {resSuccess ?
        <p>Success Fully Updated</p>:<div></div>}
        {resError ?
        <p>Failed to Update</p>:<div></div>}
      </div>
    }
    </>
  )
}
