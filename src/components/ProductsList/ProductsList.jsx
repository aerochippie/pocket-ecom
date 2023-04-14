import React, { useState } from 'react'
import ApiData from '../../features/ApiData'
import { urlProducts } from '../../utils/constants'
import { Card } from '../Card/Card'
import "./ProductsList.scss"
import { Input } from '@mui/material';
import FormControl from '@mui/material/FormControl';


export const ProductsList = () => {


  const { products } = ApiData(urlProducts)
  const [search, setSearch] = useState('')



  return (





    <>   
       <div>
        <FormControl >
            <Input onChange={(e)=> setSearch(e.target.value)} variant='outlined' size='small' color='secondary' placeholder='search...'/>

        </FormControl>
    </div>

    
    <div className="container">
    
      {products
      .filter((item)=> {
        return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
      })
      .map((item) => (
    
      
      
         
          < Card key={item.id} id={item.id} item={item} />
         
          )
       
        
      )}
    </div>
 
    </>
  )
}
