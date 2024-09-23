import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies,onDelete}) {
  
  return (
    <div className='movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
    {movies.map((movie, index)=>(
        <MovieCard key={index} movie={movie} index={index} onDelete={onDelete}/>
    ))}
    </div>
  );
};

export default MovieList