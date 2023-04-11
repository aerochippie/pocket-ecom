import  {useState, useEffect} from 'react';

const SingleData = (url) => {

    const[product, setProduct] = useState({})


    useEffect(() => {
        const getProduct = async () => {
            try {
              const data = await fetch(url);
              const json = await data.json();
              setProduct(json);
            } catch (error) {
              console.log(error);
            };
          }
          getProduct();
    }, [url]);


  return {product}
}

export default SingleData;