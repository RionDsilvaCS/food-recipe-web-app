import React from 'react'
import { useState } from 'react'
import Products from "./Products";
import Home from "./Home";
import "./Hero.css"

const Hero = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const submitHandler = e => {
        e.preventDefault();
        fetch(`https://food-recipe-api-for-assin.onrender.com/api/recipe/get-recipe-list`,
            {
                headers: {
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmNDE3OGRkZGFlZmY3ZDU4ZjliODAiLCJpYXQiOjE2OTk1MDg0MzR9.vWSq6DuZzL04KQpKhwQn0EA_KdomjGT5U0zNpUvYt4w"
                }
            }
        ).then(
            response => response.json()
        ).then(
            data => setData(data)
            // data => console.log(data)
        )
    }
    return (
        <div className='app'>
            <h1 className='appName'>FOOD RECIPE APP</h1>
            <form onSubmit={submitHandler} className='appForm'>
                <input type="text" className='inputText' placeholder="I'm Looking For..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <input type="submit" className="inputSearch" value="Search" />
            </form>
            {data.length >= 1 ? <Products data={data} key={data._id} />: <Home />}
        </div>
    )
}

export default Hero