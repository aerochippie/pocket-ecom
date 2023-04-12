import React from 'react'

import "./Cart.scss"
import { useSelector } from 'react-redux'


export const Cart = () => {
  const products = useSelector(state=>state.cart.products)
  return (
    <div className="cart-container">
 <div className='cart'>
      <h2> Products in you Cart</h2>
      
      {products.map((item)=> (
        <div className="item" key={item.id}>
          <div className="cart-image">
          <img src={item.image} alt="" />

          </div>
          <div className="details">
            <h2> {item.title}</h2>
            <div className="price">{item.quantity} x ${item.price} total: {item.quantity*item.price}</div>
          </div>
        </div>
      ))}
      
      <button className='button'> checkout </button>
      </div>

    </div>
   

    
  )
}
