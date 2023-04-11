import React from 'react'
import "./ProductsList.scss"
import { Card } from '../Card/Card'

import ApiData from '../../features/ApiData'
import { urlProducts } from '../../utils/constants'


export const ProductsList = () => {
  const  { products } = ApiData(urlProducts)
  return (
<div className="container"> 
    {products.map((item)=> {
      return (
        < Card key={item.id} id={item.id} item={item}/>

      )
    })}
    </div>
   
  )
}
