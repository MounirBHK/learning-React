import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function CatFactGen() {

    // fetch('https://catfact.ninja/fact')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //     })

    const [catFact, setCatFact] = useState('')

    const fetchCatFact = () => {
        Axios.get('https://catfact.ninja/fact').then((res) => {
            // console.log(res.data)
            setCatFact(res.data.fact)
        })
    }

    useEffect(() => {
        fetchCatFact()
    }, [])


    return (
        <div>
            <button onClick={fetchCatFact}>Generate Cat Fact</button>
            <p>{catFact}</p>
        </div>
    )
}
