import React, { useContext } from 'react';
import { AppContext } from '../App';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export default function Home() {
  const { username } = useContext(AppContext);

  const { data: catData, isLoading, isError, refetch } = useQuery({
    queryKey: ['catQuery'],
    queryFn: async () => {
      const response = await Axios.get('https://catfact.ninja/fact');
      return response.data.fact;
    },
  });

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (isError) {
    return <h1>There was an Error</h1>;
  }

  return (
    <div>
      <h1>Home</h1>
      <h2>username : {username} </h2>
      <hr />
      <div>
        <p>{catData}</p>
      </div>
    </div>
  );
}
