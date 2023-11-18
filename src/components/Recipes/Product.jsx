import React from 'react'
import "./product.css"

const Product = () => {
  const data = [
    // {
    //   id: 1,
    //   img2: "https://images.pexels.com/photos/7937410/pexels-photo-7937410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   title: "Black Coffee",
    //   desc: "This is how we do black coffee This is how we do black coffee This is how we do black coffee This is how we do black coffee",
    //   calorie: 79,
    // },
    {
      "_id": "6548f3c511fb00749107d93a",
      "recipe_name": "Sambar",
      "calorie": "139",
      "desc": "This is how we do sambar This is how we do sambar This is how we do sambar This is how we do sambar This is how we do sambar This is how we do sambar This is how we do sambar",
      "image": "https://drive.google.com/uc?export=view&id=1ST4JrD9KEIiaje-29S2uPss7stpXEl48",
      "items": [
        {
          "_id": "6552f47512c490fb7c9b75d1",
          "item_name": "Vegetables",
          "item_description": "Onion Carrot Tomato",
          "item_quantity": "100 each"
        },
        {
          "_id": "6552f47512c490fb7c9b75d2",
          "item_name": "water",
          "item_description": "transparent color liquid substance",
          "item_quantity": "100"
        },
        {
          "_id": "6552f47512c490fb7c9b75d3",
          "item_name": "Salt",
          "item_description": "White color",
          "item_quantity": "50"
        },
        {
          "_id": "6552f47512c490fb7c9b75d4",
          "item_name": "Masala",
          "item_description": "Yellowish red color",
          "item_quantity": "50"
        }
      ]
    },
  ];
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