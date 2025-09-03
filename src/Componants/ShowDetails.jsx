import React, { useEffect } from 'react'

function ShowDetails({ movie, onClose }) {
  useEffect(() => {
    console.log(movie);
  }, [movie]);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="w-[400px] h-auto max-w-[90%] bg-white shadow-xl rounded-xl p-6 relative">
        {/* Close button (top right) */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>

        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
          className="w-full rounded-xl mb-4"
        />

        <p className="text-gray-700 mb-2">
          <strong>Release Date:</strong> {movie.release_date}
        </p>
          <p className="text-gray-700 mb-2">
          <strong>Rating:</strong> {movie.vote_average}/10 (based on {movie.vote_count} votes)
        </p>

         <p className="text-gray-700 mb-2">
          <strong>Popularity:</strong> {movie.popularity}/
        </p>
        
        <p className="text-gray-600">{movie.overview || "No description available."}</p>
      </div>
    </div>
  )
}

export default ShowDetails
