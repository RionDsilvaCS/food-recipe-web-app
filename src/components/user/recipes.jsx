import {React, useState} from 'react'
import Home from '../Home'
import Recipes from '../Recipes/recipe'
import {Link} from 'react-router-dom';
import axios from 'axios';
export default function recipes() {
  const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    function handleSubmit() {
        localStorage.removeItem('token')
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
        // const  headers = {
        //     "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmNDE3OGRkZGFlZmY3ZDU4ZjliODAiLCJpYXQiOjE2OTk1MDgwNjV9.Vb0bdoZSOcGOn0h9i9R1to0pnOl_ygfr7FCC7OvcW1Y"
        // }
        
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
        <div className='app'>
            <h1 className='appName'>FOOD RECIPE APP</h1>
            <Link to='/dashboard'><button>Dashboard</button></Link>
            <button onClick={handleSubmit}>Logout</button>
            <form onSubmit={submitHandler} className='appForm'>
                <input type="text" className='inputText' placeholder="I'm Looking For..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <input type="submit" className="inputSearch" value="Search" />
            </form>
            {data.length >= 1 ? <Recipes data={data} key={data._id} />: <Home />}
        </div>
    )
}
