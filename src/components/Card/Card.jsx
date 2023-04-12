import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'
import { Prices } from './Prices'
import { Alert } from './Alert'



export const Card = ({ item, id }) => {
    return (

        <div className="card">

            <Link to={`/product/${id}`}> 
            <div className="card-image">
                <img src={item.imageUrl} alt="" />
            </div>
            </Link>

            <div className="description">
                <h3> {item.title} </h3>
                < Prices price={item.price} newPrice={item.discountedPrice}/>
            </div>
            < Alert  id={item.id} title={item.title} price={item.price} image={item.imageUrl}/>


        </div>



    )
}



{

}