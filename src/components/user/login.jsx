import {React, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./user.css"


export default function auth() {
  const handleSubmit = (event) => {

    event.preventDefault();

    var { email, pass } = document.forms[0];

    const credential = {
      "email": email.value,
      "password": pass.value
    }

    axios.post('https://food-recipe-api-for-assin.onrender.com/api/users/login', credential)
        .then(response => {

          localStorage.setItem('token', response.data.token);
          localStorage.setItem('admin', response.data.admin);
    
          window.location.href = '/'
        })
        .catch(error => {
            // this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
  };
  

  return (
    <>
    <div className='login-box'>
      <h1>Food Recipes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br/>
          <input type="text" name="email" required />
        </div>
        <div>
          <label>Password </label><br/>
          <input type="password" name="pass" required />
        </div>
        <div>
          <center><input type="submit" value='Login' className='login-btn'/></center>
        </div>
      </form>
      <Link to='/register'><button className='register-link'>Register</button></Link>
      </div>
    </>
  )
}
