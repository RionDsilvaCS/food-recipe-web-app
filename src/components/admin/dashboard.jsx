import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import CreateRecipe from './createrecipe'
import UpdateRecipe from './updaterecipe'
import DeleteRecipe from './deleterecipe'

export default function dashboard() {
  
  function handleSubmit() {
    localStorage.removeItem('token')
    window.location.href = '/'
  }
  return (
    <>
    <Link to='/recipes'><button>Recipes</button></Link>
    <button onClick={handleSubmit}>Logout</button>
      <h1>Dashboard</h1>
      <h2>Create</h2>
      <CreateRecipe/>
      <h2>Update</h2>
      <UpdateRecipe />
      <h2>Delete</h2>
      <DeleteRecipe />
    </>
  )
}
