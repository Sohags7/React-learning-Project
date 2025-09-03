import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import ShowDetails from './ShowDetails'

function Header() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-600 text-[18px] font-semibold cursor-pointer hover:underline"
      : "text-white text-[18px] font-semibold cursor-pointer hover:underline"

  useEffect(() => {
    if (!query) {
      setSuggestions([])
      return
    }

    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=474b1ac1920478cde662af50b6031963&query=${query}`
        )
        const data = await res.json()
        setSuggestions(data.results || [])
      } catch (err) {
        console.error("Error fetching movie:", err)
      }
    }

    // ⏳ debounce: wait 500ms after typing before calling API
    const timeoutId = setTimeout(fetchMovie, 500)
    return () => clearTimeout(timeoutId)
  }, [query])

  return (
    <div>
      {selectedMovie && (
        <ShowDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      <div className="py-4 w-full bg-black flex justify-around px-10 items-center">
        <NavLink className="text-red-600 text-[30px] font-extrabold" to={'/'}>BedFlix</NavLink>

        <div className="flex items-center gap-10">
          <NavLink className={linkClass} to={'action'}>Action</NavLink>
          <NavLink className={linkClass} to={'drama'}>Drama</NavLink>
          <NavLink className={linkClass} to={'animation'}>Animation</NavLink>
          <NavLink className={linkClass} to={'adventure'}>Adventure</NavLink>
          <NavLink className={linkClass} to={'sci-fi'}>Sci-Fi</NavLink>
        </div>

        <div className="flex relative w-[300px]">
          <input
            type="text"
            className="w-full bg-white rounded-xl px-10 py-2 border focus:outline-none focus:border-2 focus:border-red-500"
            placeholder="Search Movie"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="w-6 h-6 absolute right-3 top-2 text-gray-600 cursor-pointer" />

       
          {suggestions.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
              {suggestions.slice(0, 8).map((movie) => (
                <div
                  key={movie.id}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedMovie(movie) 
                    setQuery('') 
                    setSuggestions([]) 
                  }}
                >
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      alt={movie.title}
                      className="w-10 h-14 object-cover rounded"
                    />
                  ) : (
                    <div className="w-10 h-14 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">
                      N/A
                    </div>
                  )}

                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{movie.title}</span>
                    <span className="text-xs text-gray-500">
                      {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
