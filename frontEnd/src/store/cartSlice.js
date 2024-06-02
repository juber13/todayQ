import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    initialState :{
        cart : [],
        bookMarks : []
    },
    name : "cart",

    reducers : {
        addToCart  : (state , action) => {
           state.cart.push(action.payload)
        },
        removeToCart  : (state , action) => {
            return state.cart.filter(item => item._id !== action.payload)
        },

        addToBookMark : (state , action) => {
            state.bookMarks.push(action.payload)

        },

        removeFromBookMark : (state , action) => {
            return state.bookMarks.filter(item => item._id !== action.payload)
        },
    }
});


export const {addToCart , removeToCart , addToBookMark , removeFromBookMark} = cartSlice.actions;

export default cartSlice.reducer;