import React from 'react'
import "./Navbar.scss"
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (

    <div className='navbar'>
        <div className="wrapper">
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
                <span> 0 </span>
                </Link>
            
             
            </div>
        </div>
    </div>
  )
}
