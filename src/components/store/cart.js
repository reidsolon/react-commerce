import { createSlice } from "@reduxjs/toolkit";

const InCart = (state, product) => {
    return state.cartSlice.items.map(e => e.id).indexOf(product.id) >= 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        setItems: (state) => {
            var items = localStorage.getItem('cart')
            if (items !== null) {
                items = JSON.parse(items)
            } else {
                items = []
            }
            state.items = [...items]
        },
        add: (state, { payload }) => {
            if (state.items.map(e => e.id).indexOf(payload.id) < 0) {
                payload.qty = 1
                state.items.push(payload)
            }
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        increment: (state, { payload }) => {
            var index = state.items.map(e => e.id).indexOf(payload.id)
            if (index >= 0) {
                state.items[index].qty = state.items[index].qty + 1
            }
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        change: (state, { payload }) => {
            payload.qty = parseInt(payload.value)
            var index = state.items.map(e => e.id).indexOf(payload.id)
            if (index >= 0) {
                if (payload.qty <= 0) {
                    state.items[index].qty = 1
                } else {
                    state.items[index].qty = parseFloat(payload.qty)
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        decrement: (state, { payload }) => {
            var index = state.items.map(e => e.id).indexOf(payload.id)
            if (index >= 0) {
                if (!(state.items[index].qty <= 1)) {
                    state.items[index].qty = state.items[index].qty - 1
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        remove: (state, { payload }) => {
            var index = state.items.map(e => e.id).indexOf(payload.id)
            if (index >= 0) {
                state.items.splice(index, 1)
            }
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
    }
})

export { InCart }
export const { add, remove, total, setItems, increment, decrement, change } = cartSlice.actions
export default cartSlice.reducer