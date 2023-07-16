import Swal from 'sweetalert2';
import { cartActions } from "../slices/cartSlice";


// add item to cart 
export const addItemToCart = (newItem) => {
    return (dispatch, getState) => {
        dispatch(cartActions.addItemToCart(newItem));

        const { cart } = getState();
        localStorage.setItem("cartItems",JSON.stringify(cart.cartItems));
    }
};

// remove item from cart 
export const removeItemFromCart = (id) => {
    return (dispatch, getState) => {
        dispatch(cartActions.removeItemFromCart(id))

        const { cart } = getState();
        localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));

    }
};

// handle aler message
export const handleAlert = (icon,title) =>{
        Swal.fire({
            position: 'top-start',
            icon,
            title,
            showConfirmButton: false,
            timer: 1500,
            toast: true,
            animation :true,
        });
    }