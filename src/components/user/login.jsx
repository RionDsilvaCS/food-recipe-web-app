import {React, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

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
    
          window.location.href = '/recipes'
        })
        .catch(error => {
            // this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
  };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="text" name="email" required />
        </div>
        <div>
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      <Link to='/register'><button>Register</button></Link>
    </>
  )
}
