import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">


        <div className="socials">

          <div className="newsletter">
            <input placeholder='Email-address' />
            <button type='submit'> subscribe </button>
          </div>

          <div className="socials-icons">

          <Link className="link menu-link" to="#">< FacebookIcon /></Link>
          <Link className="link menu-link" to="#">< TwitterIcon /></Link>
          <Link className="link menu-link" to="#">< InstagramIcon /></Link>
          <Link className="link menu-link" to="#">< GitHubIcon /></Link>

          </div>
        </div>
        <hr className='divider'/>
     
        <div className="menu">
      
          <div className="menu-navigate">
            <p> Navigation </p>
            <Link className="link menu-link" to="/"> Home</Link>
            <Link className="link menu-link" to="#"> Blog</Link>
            <Link className="link menu-link" to="#"> About</Link>
            <Link className="link menu-link" to="/contact"> Contact</Link>

          </div>
          <div className="menu-category">
            <p> Categories </p>
            <Link className="link menu-link" to="#"> Clothing</Link>
            <Link className="link menu-link" to="#"> Electronics</Link>
            <Link className="link menu-link" to="#"> Household</Link>
            <Link className="link menu-link" to="#"> Self-care</Link>

          </div>
          <div className="short-about">
            <span> <h3> About </h3>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et pariatur sint ipsa accusamus? Nisi, repellat ratione eius minima ut, quo facilis similique cumque impedit repellendus amet corporis quibusdam. Aliquam.
            </span>
          </div>
        </div>
        <hr className='divider'/>

        <div className="payment">
        <div className="payment-image">
          <img src="/img/paymentmethods.png" alt="" />
        </div>
        </div>
        <div className="copyright">
          <span> Copyright 	&copy; Pocket E-commerce </span>
          <span>Powered by love for nerding</span>
        </div>
 
      </div>
    </div>
  )
}
