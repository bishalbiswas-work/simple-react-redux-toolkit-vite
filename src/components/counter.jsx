import React from "react"
import { useAppSelector, useAppDispatch } from "../Redux/hooks"
import { increment, decrement, incrementByAmount } from "../Redux/Slice/counterSlice"

export default function Counter() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    console.log("Count value:", count); // should always be a number

    return (<>
        <h1>{count}</h1>
        <h3>Hello</h3>
        <button onClick={() => { dispatch(increment()) }}>+1</button>
        <button onClick={() => { dispatch(decrement()) }}>-1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>

    </>)
}