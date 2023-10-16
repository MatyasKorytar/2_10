import { useState } from "react"

const Counter = ({value, setValue}: {value: number, setValue: (v: number) => void }) => {
    return (
        <>

        <button onClick= {e => {setValue(value - 1)}}>-</button>
        <span><strong>{value}</strong></span>
        <button onClick= {e => {setValue(value + 1)}}>+</button>
        </>
    );
}

export default Counter;