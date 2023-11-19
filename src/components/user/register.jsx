import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import "./user.css";

export default function register() {

  const handleSubmit = (event) => {

    event.preventDefault();

    var { fname, lname, email, pass } = document.forms[0];

    const credential = {
      "fname": fname.value,
      "lname": lname.value,
      "email": email.value,
      "password": pass.value
    }

    axios.post('https://food-recipe-api-for-assin.onrender.com/api/users/register', credential)
        .then(response => {
          window.location.href = '/login'
        })
        .catch(error => {
            // this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
  };
  return (
    <>
    <div className='reg-box'>
      <h2>Food Recipes</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First name</label><br/>
          <input type="text" name="fname" required />
        </div>
        <div>
          <label>Last name</label><br/>
          <input type="text" name="lname" required />
        </div>
        <div>
          <label>Email</label><br/>
          <input type="text" name="email" required />
        </div>
        <div>
          <label>Password </label><br/>
          <input type="password" name="pass" required />
        </div>
        <div>
         <center><input type="submit" value="Register" className='login-btn'/></center> 
        </div>
      </form>
      <Link to='/login'><button className='register-link'>Login</button></Link>
      </div>
    </>
  )
}
