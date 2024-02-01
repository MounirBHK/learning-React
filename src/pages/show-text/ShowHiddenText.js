import React from 'react'
import { useToggle } from '../../custom hooks/useToggle'

export default function ShowHiddenText() {
    const [isVisible, setIsVisible] = useToggle(false)
    const [isVisible2, setIsVisible2] = useToggle(false)

    return (
        <div>
            <button onClick={() => setIsVisible((prev) => !prev)}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <h1>Hidden text</h1>}

            <hr />

            <button onClick={() => setIsVisible2((prev) => !prev)}>
                {isVisible2 ? 'Hide' : 'Show'}
            </button>
            {isVisible2 && <h1>Hidden second text with the same user hook</h1>}
        </div>
    )
}
