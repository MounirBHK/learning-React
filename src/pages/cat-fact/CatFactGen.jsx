import React from 'react';
import { useGetCat } from '../../custom hooks/useGetCat';


export default function CatFactGen() {
    const {catData, refetchCatFact, isLoading, isError} = useGetCat()

    return (
        <div>
            <button onClick={refetchCatFact} disabled={isLoading}>
                Generate Cat Fact
            </button>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching cat facts</p>}
            {!isLoading && !isError && <p>{catData}</p>}
        </div>
    );
}

// import React from 'react';
// import Axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
// export default function CatFactGen() {
//     const { data: catFact, isLoading, isError, refetch: fetchCatFact } = useQuery({
//         queryKey: ['catQuery'],
//         queryFn: async () => {
//             const response = await Axios.get('https://catfact.ninja/fact');
//             return response.data.fact;
//         },
//     });

//     return (
//         <div>
//             <button onClick={fetchCatFact} disabled={isLoading}>
//                 Generate Cat Fact
//             </button>
//             {isLoading && <p>Loading...</p>}
//             {isError && <p>Error fetching cat facts</p>}
//             {!isLoading && !isError && <p>{catFact}</p>}
//         </div>
//     );
// }

// import React, { useEffect, useState } from 'react'
// import Axios from 'axios'

// export default function CatFactGen() {

//     // fetch('https://catfact.ninja/fact')
//     //     .then((res) => res.json())
//     //     .then((data) => {
//     //         console.log(data)
//     //     })

//     const [catFact, setCatFact] = useState('')

//     const fetchCatFact = () => {
//         Axios.get('https://catfact.ninja/fact').then((res) => {
//             // console.log(res.data)
//             setCatFact(res.data.fact)
//         })
//     }

//     useEffect(() => {
//         fetchCatFact()
//     }, [])


//     return (
//         <div>
//             <button onClick={fetchCatFact}>Generate Cat Fact</button>
//             <p>{catFact}</p>
//         </div>
//     )
// }
