import React from 'react'
import "./Navbar.scss"
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = () => {

  const products = useSelector(state => state.cart.products)

  const totalQuantity = () => {
    let qty = 0;
    products.forEach((item) => {
      qty += item.quantity;
    })
    return qty;
  }

  return (

    <div className='navbar'>
        <div className="nav-wrapper">
            <div className="left">
              <div className="pocketdog">
                <img src="/img/pocketdog.png" alt="illustration of a french bulldog inside a brown pocket" />
              </div>
            </div>
            <div className="center">
              <Link className="link" to="/"> <h1> POCKET </h1></Link>
            </div>
            <div className="right">
                <Link className='link cart' to="/cart">  
                < ShoppingCartRoundedIcon sx={{ fontSize: "x-large"}}/>
                <span> {totalQuantity()}</span>
                </Link>
            </div>
        </div>
    </div>
  )
}
