import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'



export const Card = ({ item, id }) => {
const dispatch = useDispatch()
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

            <button type="button" onClick={()=>dispatch(addToCart({
                id:item.id,
                title:item.title,
                price:item.price,
                image:item.imageUrl
            }))}> Add to cart </button>

        </div>



    )
}
