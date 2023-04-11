import React from 'react'
import "./Featured.scss"
import { Card } from '../Card/Card'

import ApiData from '../../features/ApiData'
import { url } from '../../utils/constants'


export const Featured = () => {
  const  { products } = ApiData(url)
console.log(products)
  return (
<div className="container"> 
    {products.map((item)=> {
      return (
        < Card
        
        key={item.id}
        title={item.title}
        image={item.imageUrl}
        price={item.price}
        discountedPrice={item.discountedPrice}
        
        />

      )
    })}
    </div>
   
  )
}
