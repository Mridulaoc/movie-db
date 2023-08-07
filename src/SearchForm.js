import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {

  const { searchTerm, setSearchTerm, error } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='form-input'></input>
      {error.show && <div className='error-msg'>{error.message}</div>}
    </form>
  )
}

export default SearchForm

