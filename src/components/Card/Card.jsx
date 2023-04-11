import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'



export const Card = ({ item, id }) => {

    return (

        <div className="card">

            <Link to={`/product/${id}`}> <div className="card-image">
                <img src={item.imageUrl} alt="" />

            </div></Link>

            <div className="description">
                <h3> {item.title} </h3>
                <p>{item.price}</p>
                <p>{item.discountedPrice}</p>
            </div>
            
            <button type="button"> Add to cart </button>

        </div>



    )
}
