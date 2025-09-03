import React, { useEffect, useState } from "react";

const AnimationMovie = () => {
  const [movies, setMovies] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=474b1ac1920478cde662af50b6031963&with_genres=16"
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, []);

  if (!movies.length) return <p className="text-center text-white">Loading...</p>;

  const duplicatedMovies = [...movies, ...movies];

  return (
    <div className="relative w-full bg-black py-10">
      <h1 className="text-[38px] font-extrabold text-white text-center mb-2"> Animation Movies</h1>
      <h5 className="text-gray-300 text-center mb-8">
        Explore the most captivating animated movies from TMDB, streaming across the screen.
      </h5>

      <div
        className="overflow-hidden slider-mask relative px-4"
         onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        tabIndex={0} 
      >
    <div
      className={`flex gap-6 w-max sohags-scroll ${isPaused ? "paused" : ""}`}
    >

          {duplicatedMovies.map((movie, index) => (
            <div
              key={`${movie.id}-${index}`}
              className="flex-none w-72 h-[420px] rounded-3xl overflow-hidden shadow-2xl relative transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
                    : "https://via.placeholder.com/780x1170?text=No+Image"
                }
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h2 className="text-lg font-bold text-white truncate">{movie.title}</h2>
                <p className="text-sm text-gray-300 mt-1 truncate">{movie.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrolls {
        from  { transform: translateX(calc(-50% - 1.5rem)); }
        to { transform: translateX(0); }
        
      }
      .sohags-scroll {
        animation: scrolls 60s linear infinite;
      }
      .paused {
        animation-play-state: paused !important;
      }

        .slider-mask {
          -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%);
        }
      `}</style>
    </div>
  );
};

export default AnimationMovie;
