import React from 'react'
import "./products.css"

const Product = () => {
  
  return (
    <>
      <div className='product'>
        {data.map(data =>
          <div className="flex">
            <div className="flexleft">
              <h2 class="Title">{data.recipe_name}</h2>
              <img className='cardImage' src={data.image} alt="Card image" />
              <h1 className='toph1'>{data.calorie} Calories</h1>
            </div>
            <div className='flexright'>
              <h2>Recipe</h2>
              <p>{data.desc}</p>
              <h2>Ingredients</h2>
              {data.items.map(item => (
                <div className='ingredients' key={item._id}>
                  <h4>{item.item_name}</h4>
                  <span>{item.item_description}</span>
                  <span>{item.item_quantity} tb spn</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Product