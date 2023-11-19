import React from 'react'
import './products.css'

const Products = ({ data }) => {
  return (
    <>
      <div className='products'>
        {data.map(data =>
          // <Link className='link' to={`/product/${data._id}`}>
          <div className='card' >
            <div className="imgDiv"><img className='cardImg' src={data.image} alt="Card image" /></div>
            <div className="recipe">
              <h2 className='cardTitle'>{(data.recipe_name).substring(0, 60)}</h2>
              <p class="cardText"><span className='cal'>Calories :</span> {Math.round(data.calorie)} Kcal</p>
              <div className="Ing">
                <p className='cal2'>Ingredients :</p>
                {data.items.map(item => (
                  <div className='ingredients' key={item._id}>

                    <h5>{item.item_name}</h5>
                    <span className='Ingdesc'>{item.item_discription}</span>
                    <span className='Ingqua'>{item.item_quantity} tb spn</span>

                  </div>
                ))}
              </div>
            </div>
          </div>
          // </Link>
        )}
      </div>
    </>
  )
}

export default Products
