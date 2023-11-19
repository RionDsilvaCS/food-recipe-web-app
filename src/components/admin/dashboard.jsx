import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import CreateRecipe from './createrecipe'
import UpdateRecipe from './updaterecipe'
import DeleteRecipe from './deleterecipe'

export default function dashboard() {
  
  const [shiftValue, setShift] = useState(1);

  function handleSubmit() {
    localStorage.removeItem('token')
    localStorage.removeItem('admin')
    window.location.href = '/'
  }

  function handleOne(){
    setShift(1)
  }

  function handleTwo(){
    setShift(2)
  }

  function handleThe(){
    setShift(3)
  }

  return (
    <>
      <div className='dash-box'>
        <div className='app-header'>
          <h1>Dashboard</h1>
          <div>
          <Link to='/recipes'><button  className='nav-btn marg'>Recipes</button></Link>
          <button onClick={handleSubmit} className='logout'>Logout</button>
          </div>
        </div>
        <div className='dash-nav'>
          <button onClick={handleOne}>Create Recipe</button>
          <button onClick={handleTwo}>Update Recipe</button>
          <button onClick={handleThe}>Delete Recipe</button>
        </div>
        <div className='dash-main'>
          {shiftValue==1?
          <div>
            <h2>Create Recipe</h2>
            <CreateRecipe/>
          </div> 
          :shiftValue==2?
          <div>
            <h2>Update Recipe</h2>
            <UpdateRecipe />
          </div>
        :shiftValue==3?
          <div>
            <h2>Delete Recipe</h2>
            <DeleteRecipe />
          </div>
          :<div></div>
      }
        </div>  
      </div>
    </>

  )
}
