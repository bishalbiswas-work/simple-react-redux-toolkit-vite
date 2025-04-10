import { createSlice } from "@reduxjs/toolkit"


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            console.log("incrementByAmount payload:", typeof (action.payload));

            const amount = Number(action.payload);
            state.value += amount
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer

