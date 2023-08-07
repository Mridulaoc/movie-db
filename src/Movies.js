import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'

const url = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'

const Movies = () => {
  const { movies, loading } = useGlobalContext();
  

  if (loading) {
      return <h2>Loading...</h2>
    }
  return (
    <section className='movies'>
      {movies.map((movie) => {
        const { imdbID: id, Title: title, Poster: poster, Year: year } = movie;
        return (
          <Link to={`/movies/${id}`} className="movie">
            <article>
              <img src={poster ==='N/A' ? url : poster} alt={title} />
              <div className="movie-info">
                <h3>{title}</h3>
                <p>{year}</p>
              </div>
            </article>
         </Link>
        )
      })}
    </section>
  )
}

export default Movies
