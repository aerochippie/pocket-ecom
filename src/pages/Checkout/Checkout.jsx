import React from 'react'
import { Link } from 'react-router-dom'

export const Checkout = () => {
  return (
    <>
    <div className="checkout-container">
      <div className="checkout-message">
        <h2> Your order has been confirmed</h2>
        <p> find your order in emails</p>
        <Link to={'/contact'}> <p> contact</p> </Link>
      </div>  </div>

 
  
    
    </>
  )
}
