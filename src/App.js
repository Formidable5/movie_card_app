import React,{useState} from 'react';
import './App.css';
import AddMovies from './components/AddMovies';
import Filtered from './components/Filtered';
import MovieList from './components/MovieList';


function App() {
const [movies, setMovies] = useState([
  {
    title: "Clean and Amarachi",
    description: "The intense love affair",
    posterURL: "https//google.com",
    rating: 5,
  },
  {
    title: "Prison Break",
    description: "The Break of top secured prision",
    posterURL: "https//google.com",
    rating: 3,
  },
])
const [filteredMovies, setFilteredMovies] = useState(movies)

const handleFilter = (filter) => {
  const {title,rating} = filter;
  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(title.toLowerCase())&& movie.rating >= (rating || 0)
  );
  setFilteredMovies(filtered)
}

const handleAddMovie =(newMovie) => {
  setMovies([...movies, newMovie]);
  setFilteredMovies([...movies, newMovie])
}

function handleDeleteMovie(index) {
  const newMovieList = movies.filter((_, movieindext) => {
  return movieindext !== index 
  }) 
  setMovies(newMovieList)
  setFilteredMovies(newMovieList)
};



  return (
    <div className='app container mx-auto p-4 '>
      <h1 className='text-4xl font-bold text-center mb-6'>My Fovorite Movie App</h1>
      <Filtered onFliter={handleFilter}/>
      <AddMovies onAdd={handleAddMovie}/>
      <MovieList  movies={filteredMovies} onDelete={handleDeleteMovie}/>
    </div>
  
  );
}

export default App;
