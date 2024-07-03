import { useEffect, useState } from 'react';
import './App.css';
import {getMovielist, searchMovie} from "./api.js"

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() =>  {
    getMovielist().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const PopularMoviesList = () => {
    return popularMovies.map((movie, i) => {
      return (
          <div className='Movie-wrapper' key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} />
            <div className="Movie-date">Launching: {movie.release_date}</div>
            <div className="Movie-rate">Ratting: {movie.vote_average}</div>
          </div>
      )
    })
  }

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hans Movie API</h1>
        <input className='Movie-search' type="text" placeholder='Cari Film Kesayangan...'
        onChange={({ target }) => search(target.value)}
        />
        <div className='Movie-container'>
          <PopularMoviesList />
        </div>
      </header>
    </div>
  );
}

export default App;
