import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Scifi() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setError(false);
      setLoading(true);
      try {
        const res = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key: '474b1ac1920478cde662af50b6031963',
            with_genres: 878,
            page: page
          }
        });
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages); 
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [page]);

  if (loading) return <h1 className='text-center text-black'>Loading ...</h1>;
  if (error) return <h1 className='text-center text-black'>Error loading ...</h1>;

  
  const pageNumbers = [];
  const maxPagesToShow = 10;
  const startPage = Math.max(1, page - 4);
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center px-10 py-6">
        {movies.map((item) => (
          <div
            key={item.id}
            className="flex-none w-72 h-[420px] rounded-3xl overflow-hidden shadow-2xl relative transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w780${item.poster_path}`
                  : "https://via.placeholder.com/780x1170?text=No+Image"
              }
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h2 className="text-lg font-bold text-white truncate">{item.title}</h2>
              <p className="text-sm text-gray-300 mt-1 truncate">{item.release_date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Page Number Pagination */}
      <div className="flex justify-center gap-2 my-6 flex-wrap">
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-4 py-2 rounded ${
              page === num ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-800'
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </>
  );
}

export default  Scifi;
;
