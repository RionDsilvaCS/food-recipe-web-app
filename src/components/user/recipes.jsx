import {React, useState} from 'react'
import Home from '../Home'
import Recipes from '../Recipes/recipe'
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./user.css"
export default function recipes() {
  const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const admin = localStorage.getItem('admin')
    
    function handleSubmit() {
        localStorage.removeItem('token')
        localStorage.removeItem('admin')
        window.location.href = '/'
      }
      
    const submitHandler = e => {
        e.preventDefault();

        fetch(`https://food-recipe-api-for-assin.onrender.com/api/recipe/get-recipe-list`,
            {
                headers: {
                    "auth-token": localStorage.getItem('token')
                }
            }
        ).then(
            response => response.json()
            
        ).then(
            data => setData(data)
            // data => console.log(data)
        )
        
        // axios.get('https://food-recipe-api-for-assin.onrender.com/api/recipe/get-recipe-list', {headers})
        //     .then(response => {
        //         setData(response.json())
        //         console.log(data)
        //     })
        //     .catch(error => {
        //         console.error('There was an error!', error);
        
        //     });
    }
    return (
        <div className='recipe-search'>
            <div className='app-header'>
            <h1>FOOD RECIPE APP</h1>
            <div>
            {admin ? 
            <Link to='/dashboard'><button className='nav-btn marg'>Dashboard</button></Link>
            :<div></div>
            }
            <button onClick={handleSubmit} className='logout'>Logout</button>
            </div>
            </div>
            {
            data.length >= 1 ?
            <Recipes data={data} key={data._id} />
            : 
            <div>
            <form onSubmit={submitHandler}>
                {/* <input type="text" className='inputText' placeholder="I'm Looking For..." value={search} onChange={(e) => setSearch(e.target.value)} /> */}
                <input type="submit" className="load" value="Load Recipes" />
            </form>
            <Home />
            </div>
            }
        </div>
    )
}
