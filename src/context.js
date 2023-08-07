import React, { useState, useEffect, useContext, createContext } from 'react';

export const API_ENDPOINT = `https:///www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
console.log(API_ENDPOINT)

const AppContext = createContext();

const AppProvider = ({ children }) => {
     
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ show: false, message: '' });
    const [searchTerm, setSearchTerm] = useState('batman');

    const fetchMovies = async (url) => {
         setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            if (data.Response === 'True') {
                setMovies(data.Search);
                console.log(movies);
                setError({ show: false, message: '' });
            }
            else {
                setError({show:true, message:data.Error})
            }
            setLoading(false);

;        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}&s=${searchTerm}`)
    }, [searchTerm]);



    return <AppContext.Provider value={{movies,loading,setLoading,error,setError,searchTerm,setSearchTerm}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}


















