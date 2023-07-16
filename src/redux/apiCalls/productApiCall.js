import { productActions } from "../slices/productSlice";

// fetch products from json server api
export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:5000/products");
            const data = await res.json();
            dispatch(productActions.setProducts(data))
        } catch (error) {
            console.log(error);
        }
    }
};


// fetch one product from json server api
export const getProductById = (productId) => {
    return async (dispatch) => {
        try {
            dispatch(productActions.setLoading());
            const res = await fetch(`http://localhost:5000/products/${productId}`);
            const data = await res.json();
            dispatch(productActions.setProduct(data))
            dispatch(productActions.clearLoading());
        } catch (error) {
            console.log(error);
            dispatch(productActions.clearLoading());
        }
    }
};