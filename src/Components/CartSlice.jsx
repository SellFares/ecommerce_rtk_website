import {createSlice} from '@reduxjs/toolkit' ;

const initialState = {
    cartItems:  [] ,
}

const CartSlice = createSlice ({
    name : 'cart' ,
    initialState,
    reducers: {
        // state: This represents the current state of the Redux store. It typically includes the data relevant to the application.
        // action: This is an object that describes the action that occurred. Redux actions are plain JavaScript objects that must have a type property indicating the type of action being performed. Additionally, they may contain additional data necessary to carry out the action. In this case, action.payload likely contains the identifier (id) of the item whose quantity needs to be increased.
        addItemToCart(state,action) {
            console.log("hani nekhdem");
            const existingItems = state.cartItems.find(item => item.id === action.payload.id);
            // item => item.id === action.payload.id: This is the condition used to find a match. It compares the id of each item in the cart to the id of the item being added (which comes from action.payload).
            if ( existingItems ){
                existingItems.quantity += 1 ;
            } else {
                state.cartItems.push({...action.payload, quantity: 1});
            }

        },

        removeItemFromCart(state,action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },

        clearCart(state) {
            state.cartItems = [];
        },

        increaseItemQuantity(state,action){
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload.id);
            if ( itemToIncrease ){
                itemToIncrease.quantity += 1 ;
            }
        },

        decreaseItemQuantity(state,action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload.id);
            if ( itemToDecrease && itemToDecrease > 1 ){
                itemToIncrease.quantity -= 1 ;
            }
        }

    }
});



export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;