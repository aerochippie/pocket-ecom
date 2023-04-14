import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'


export const Alert = ({ id, title, price, image, quantity}) => {

    const dispatch = useDispatch();
      return (
      <div>
        <button type="button" className='add-to-cart' onClick={()=> dispatch(addToCart({
            id:id,
            title:title,
            price:price,
            image:image,
            quantity 
        }))}> Add to cart </button>
        </div>




  )
}


