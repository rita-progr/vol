import {CartSchema} from "../types/CartSchema.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: CartSchema = {
    isLoading: false,
    error: null,
    goods: []
}

const CartSlice = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {
        addItem: (state, action)=>{
            state.goods.push(action.payload)
        },
        deleteItem: (state, action)=>{
            state.goods.splice(state.goods.indexOf(action.payload), 1)
        }
    }
})

export const {reducer: CartReducer, actions: CartActions} = CartSlice;