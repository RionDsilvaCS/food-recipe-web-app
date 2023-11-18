import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

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
      <form onSubmit={handleSubmit}>
        <div>
          <label>First name</label>
          <input type="text" name="fname" required />
        </div>
        <div>
          <label>Last name</label>
          <input type="text" name="lname" required />
        </div>
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
      <Link to='/login'><button>Login</button></Link>
    </>
  )
}
