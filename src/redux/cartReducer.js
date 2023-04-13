import { createSlice } from '@reduxjs/toolkit'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products:[]
  },
  reducers: {

    addToCart: (state, action) => {
      const notify = () => toast.success('Added to cart', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      notify()

      const item = state.products.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.products.push(action.payload)
      }
    },

    removeItem: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload)
    },

    resetCart: (state) => {
      state.products = []
    }
  }
})

export const { addToCart, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;