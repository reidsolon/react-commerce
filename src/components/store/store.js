import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import dialogSlice from './dialogs'
import { combineReducers } from "redux";

const reducers = combineReducers({
    cartSlice,
    dialogSlice
})

export default configureStore({
    reducer: reducers
})