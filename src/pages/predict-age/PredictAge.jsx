import React, { useState } from 'react'
import Axios from 'axios'

export default function PredictAge() {

    const [name, setName] = useState('')
    const [age, setAge] = useState(null)

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            // console.log(res.data)
            setAge(res.data.age)
        })
    }

    return (
        <div>
            <input placeholder='Saisir un nom ...' onChange={(e) => setName(e.target.value)} />
            <button onClick={fetchData}>Predict Age</button>
            {age && <h2>Predicted age of {name} : {age} </h2>}
        </div>
    )
}
