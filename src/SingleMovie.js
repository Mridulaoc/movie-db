import React, { useEffect, useState } from 'react'
import { useGlobalContext, API_ENDPOINT } from './context'
import { useParams,Link } from 'react-router-dom'

const SingleMovie = () => {
  const { error,setError, loading,setLoading } = useGlobalContext();
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === 'False') {
      setError({ show: true, message: data.Error })
      setLoading(false);
    } else {
      setMovie(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  }, [id]);


  if (loading) {
    return <h2>Loading.......</h2>
  }

  if (error.show) {
    return <div className="error-page">
      <h1>{error.message}</h1>
      <Link to="/" className='btn'>Back to Movies</Link>
    </div>
  }

  const { Poster: poster, Plot: plot, Title: title, Year: year } = movie;
  return (
    <section className='movie-container'>
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>Back To Movies</Link>
      </div>
    </section>
  )
}

export default SingleMovie
