import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'



export const Card = ({id, title, image, price, discountedPrice}) => {


  return (
    
    // <div className="card"> 
    // <p> {title}</p>
    // <p> {id}</p>
    // <img src={image} alt="" />
    // </div>




<div className="card">
   <Link to={`/product/${id}`}> <div className="card-image">
    <img src={image} alt="" />

    </div></Link>
    <div className="description">
        <h3> {title} </h3>
        <p>{price}</p>
        <p>{discountedPrice}</p>
    </div>
    <button type="button"> Add to cart </button>
</div>



    )
}
