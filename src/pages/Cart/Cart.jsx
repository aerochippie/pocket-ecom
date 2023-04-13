import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetCart } from '../../redux/cartReducer'
import { removeItem } from '../../redux/cartReducer'
import { useSelector } from 'react-redux'
import "./Cart.scss"



export const Cart = () => {

  const products = useSelector(state=>state.cart.products)
  const dispatch = useDispatch()

  const totalPrice = () => {
    let sum = 0;
    products.forEach((item) => {
      sum += item.quantity * item.price;
    })
    return sum.toFixed(2);
  }


  return (
    <div className="cart-container">
 <div className='cart'>
      <h2> Products in your Cart</h2>
      {products.map((item)=> (
        <div className="item" key={item.id}>
          <div className="cart-image">
          <img src={item.image} alt="" />
          </div>
          <div className="details">
            <h2> {item.title}</h2> <button onClick={()=>dispatch(removeItem(item.id))}> remove </button>
            <div className="price">{item.quantity} x  {item.price}NOK = {item.quantity*item.price} NOK</div>
          </div>
        </div>
      ))}
       <span> Cart total: {totalPrice()}</span>
       <Link to="/checkout">   <button className='button' onClick={()=>dispatch(resetCart())}> checkout </button>  </Link>
      </div>
    </div>
  )}
