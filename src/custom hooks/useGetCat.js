import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useGetCat = () => {
    const { data: catData, isLoading, isError, refetch } = useQuery({
        queryKey: ['catQuery'],
        queryFn: async () => {
            const response = await Axios.get('https://catfact.ninja/fact');
            return response.data.fact;
        },
    });

    const refetchCatFact = () => {
        // pour des raison de test
        alert('DATA REFETCHED')
        refetch()
    }

    return { catData, refetchCatFact, isLoading, isError }
}
