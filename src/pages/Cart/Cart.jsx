import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cartReducer'
import "./Cart.scss"
import { useSelector } from 'react-redux'


export const Cart = () => {
  const products = useSelector(state=>state.cart.products)

  const dispatch = useDispatch()

  const totalPrice =()=>{
    let sum = 0;

    products.forEach((item)=> {
      sum += item.quantity * item.price;
})
return sum.toFixed(2);


  }
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
            <h2> {item.title}</h2> <button onClick={()=>dispatch(removeItem(item.id))}> remove </button>
            <div className="price">{item.quantity} x  {item.price}NOK = {item.quantity*item.price} NOK</div>
          </div>
        </div>
      ))}
       <span> umm{totalPrice()}</span>
      <button className='button'> checkout </button>
      </div>
     

    </div>
   

    
  )
}
