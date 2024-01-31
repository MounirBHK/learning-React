import React, { useState } from 'react'
import Axios from 'axios'

export default function ExcuseGenerator() {
    const [excuse, setExcuse] = useState(null)

    const fetchData = (category) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
            .then((res) => {
                if (res.data[0]) {
                    // console.log(res.data[0])
                    setExcuse(res.data[0].excuse)
                }
            }
            )
    }


    return (
        <div>
            <h1>Generate An Excuse</h1>
            <button onClick={() => fetchData('party')}>Party</button>
            <button onClick={() => fetchData('family')}>Family</button>
            <button onClick={() => fetchData('ofiice')}>Office</button>
            {excuse &&
                <p>{excuse}</p>
            }
        </div>
    )
}
