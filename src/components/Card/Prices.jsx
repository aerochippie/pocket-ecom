import React from 'react'
import "./Prices.scss"



export const Prices = ({ price, newPrice }) => {

    if (newPrice < price)
        return <>
            <p className="old-price" > {price}</p>
            <p> {newPrice}</p>
        </>

    else return (
        <p>{price} NOK </p>
    )
}
