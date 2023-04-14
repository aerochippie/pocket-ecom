import { createSlice } from '@reduxjs/toolkit'

import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../utils/constants';



export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products:[]
  },
  reducers: {

    addToCart: (state, action) => {
    
      notify('Added to cart')

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