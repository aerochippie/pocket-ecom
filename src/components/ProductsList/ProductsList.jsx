import React from 'react'
import ApiData from '../../features/ApiData'
import { urlProducts } from '../../utils/constants'
import { Card } from '../Card/Card'
import "./ProductsList.scss"


export const ProductsList = () => {
  const { products } = ApiData(urlProducts)
  return (
    <div className="container">
      {products.map((item) => {
        return (
          < Card key={item.id} id={item.id} item={item} />

        )
      })}
    </div>

  )
}
