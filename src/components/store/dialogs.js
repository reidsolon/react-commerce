import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice = createSlice({
    name: 'dialogs',
    initialState: {
        cart: false,
    },
    reducers: {
        open: (state, { payload }) => {
            state[payload.key] = payload.value
        }
    }
})

export const { open } = dialogSlice.actions
export default dialogSlice.reducer