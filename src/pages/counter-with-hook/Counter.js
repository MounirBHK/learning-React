import React from 'react'
import { useCounter } from '../../custom hooks/useCounter'

export default function Counter() {

    const { count, increase, decrease, restart } = useCounter()

    return (
        <div>
            <hr />
            <div>{count}</div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={restart}>Restart</button>
        </div>
    )
}
