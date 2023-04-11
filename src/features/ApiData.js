import React, {useState, useEffect} from 'react';

const ApiData = (url) => {

    const[products, setProducts] = useState([])


    useEffect(() => {
        const getProducts = async () => {
            try {
              const data = await fetch(url);
              const json = await data.json();
              setProducts(json);
            } catch (error) {
              console.log(error);
            };
          }
          getProducts();
    }, [url]);


  return {products}
}

export default ApiData;