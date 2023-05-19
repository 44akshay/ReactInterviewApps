import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { FULFILLED, PENDING } from "./Constants";

export const fetchAsyncProducts=createAsyncThunk('product/fetchAsyncProducts',async()=>{
        const response=await fetch('https://fakestoreapi.com/products');
        const respjson=await response.json();
        return respjson;
}) 

export const productSlice=createSlice({
    name:"product",
    initialState:{
        product:[],
        status:PENDING
    },
    reducers:{
        createProduct:(state,action)=>{
            state.product.push(action.payload)
        }
    },
    extraReducers:{
        [fetchAsyncProducts.pending]:(state)=>{
            state.status=PENDING
            console.log("pending");
        },[fetchAsyncProducts.fulfilled]:(state,action)=>{
            state.status=FULFILLED
            action.payload.map((prod)=>{
                state.product.push(prod)
            })
            console.log("fulfilled succesfully");
        },[fetchAsyncProducts.rejected]:(state)=>{
            state.status=Error
            console.log("error");
        }
    }

});

export const {createProduct} =productSlice.actions;
export default productSlice.reducer