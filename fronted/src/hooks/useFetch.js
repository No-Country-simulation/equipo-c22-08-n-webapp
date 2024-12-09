import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

//Para recibir data de un API
export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    if (error) {
        toast.error('An error occurred. Please try again.');
    }
}, [error]);

useEffect(() => {
    if (data) {
        toast.success('Data fetched successfully.');
    }
}, [data]);

    useEffect(() => {
        //Lo usan para cerrar una peticion
        const controller = new AbortController();
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url, { ...options, signal: controller.signal });
                if (!response.ok) {
                    throw new Error("Error en la petición");
                }
                const jsonData = await response.json();
                setData(jsonData);
                setError(null);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, [url, options]);

    return { data, loading, error };
};
