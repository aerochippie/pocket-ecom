import React, { useState } from 'react'
import "./Product.scss"
import { useParams } from 'react-router-dom';
import { urlProducts } from '../../utils/constants';
import SingleData from "../../features/SingleData"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'


export const Product = () => {


  const params = useParams()
  const id = params.id;
  const newUrl = urlProducts + id
  const { product } = SingleData(newUrl)
  const [quantity, setQuantity] = useState(1)
  const reviews = product.reviews;
  const dispatch = useDispatch()
  const priceDiff =  100 - (product.discountedPrice / product.price) * 100;
  const fixedPrice = priceDiff.toFixed(0)



  return (
    <>
      <div className='product-container'>
        <div className="product-left">
          <div className="product-image"> <img src={product.imageUrl} alt="" /></div>
        </div>
        <div className="product-right">
          <div className="product-title"> <h2> {product.title} </h2> </div>
          <div className="details">
            <div className="description"> <p> {product.description}</p> </div>
            <div className="prices">
              <div className="old-price">
                <p>original price: {product.price}</p>
              </div>
              <div className="new-price">
                <p>now only: {product.discountedPrice}</p>
                <p> {fixedPrice}% off</p>
              </div>
            </div>
          </div>
          <div className="quantity">

            <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>

          </div>
          <button type="button" onClick={() => dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.imageUrl,
            quantity
          }))}> Add to cart</button>
        </div>
      </div>
      <div className="product-reviews">
  <h3> Product Reviews</h3>
    {reviews?.map((rev)=>{
      return (
        <> 
        
        <div className="review-username"> {rev.username}</div>
        <div className="review-description">
          <p> {rev.description} </p>
         <span> Rating: {rev.rating}</span></div>
        </>
      )
     
    }
    
    )}
  </div>
    </>
  )
}
