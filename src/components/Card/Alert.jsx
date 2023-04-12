import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Alert = ({ id, title, price, image}) => {


    const dispatch = useDispatch()
   const notify = () => toast.success(' Wow so easy!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  return (


<div>
    <button type="button" className='add-to-cart' onClick={()=>dispatch(addToCart({
        id:id,
        title:title,
        price:price,
        image:image
    }))}> Add to cart </button>

    <button type="button" className='add-to-cart' onClick={notify}> click</button>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>




  )
}


