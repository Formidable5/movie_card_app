import React from "react";

function MovieCard({ movie, onDelete, index }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 max-w-xs">
      <img
        src={movie.posterURL || "https://via.placeholder.com/150"}
        alt={movie.title || "No title"}
        className="w-full rounded-t-lg"
      />
      <h3 className="text-xl font-bold my-2">{movie.title}</h3>
      <p className="text-gray-700">{movie.description}</p>
      <span className="block mt-2 text-sm text-gray-600">
        Rating:{movie.rating !== undefined ? movie.rating : "N/A"}/5
      </span>
      <button
        onClick={() => {
          onDelete(index);
        }}
      >
        <i className="fa-solid fa-trash"></i>
        Delete
      </button>
    </div>
  );
}

export default MovieCard;
