import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    initialState: {
        cart: [],
        bookMarks: []
    },
    name: "cart",

    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },

        removeToCart: (state, action) => {
            const index = state.cart.findIndex(item => item._id === action.payload);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
        },

        addToBookMark: (state, action) => {
            state.bookMarks.push(action.payload)

        },

        removeFromBookMark: (state, action) => {
            const index = state.bookMarks.findIndex(item => item._id === action.payload);
            if (index !== -1) {
                state.bookMarks.splice(index, 1);
            }
        },
    }
});


export const { addToCart, removeToCart, addToBookMark, removeFromBookMark } = cartSlice.actions;

export default cartSlice.reducer;