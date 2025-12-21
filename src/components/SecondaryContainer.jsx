import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies)
  return (
    movies.nowPlayingMovies && (
      <div className='secondary -mt-50   '>
        <div className='relative  z-20'>  <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.TopRatedMovies} />
          <MovieList title={"Popular"} movies={movies.nowPopularMovies} />
          <MovieList title={"Horror"} movies={movies.horrorMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        </div>
      </div>)
  )
}

export default SecondaryContainer