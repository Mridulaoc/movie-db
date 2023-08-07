import React from 'react'
import Movie from './SingleMovie'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies/:id' element={<Movie/>}/>
      </Routes>
    </Router>
  )
}

export default App
