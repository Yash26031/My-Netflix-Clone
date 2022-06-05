import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  const movieOverviewStr = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="w-full h-[550px] absolute bg-gradient-to-r from-black"></div>
          <img
            className="overflow-hidden w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="w-full absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl font-bold md:text-5xl">{movie?.title}</h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black py-2 px-5 border-gray-300">
                Play Now
              </button>
              <button className="border border-gray-300 text-white py-2 px-5 ml-4">
                {" "}
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Released : {movie?.release_date}
            </p>
            <p className="w-ful md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {movieOverviewStr(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
