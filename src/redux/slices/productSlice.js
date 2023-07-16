import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        product: null,
        isLoading:false,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setProduct: (state, action) => {
            state.product = action.payload;
        },
        setLoading: (state) => {
            state.isLoading = true;
        },
        clearLoading: (state) => {
            state.isLoading = false;
        }
    }
});

const productReducer = productSlice.reducer;
const productActions = productSlice.actions;

export { productActions, productReducer };

