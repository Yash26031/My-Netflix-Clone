import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movies = ({ items }) => {
  const [likeMovie, setLikeMovie] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2">
      <img
        className="block w-full h-auto"
        src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`}
        alt={items?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full p-2 text-white opacity-0 hover:bg-black/80 hover:opacity-100">
        <p className="flex items-center justify-center h-full text-xs font-bold text-center whitespace-normal md:text-sm ">
          {items?.title}
        </p>
        <p>
          {likeMovie ? (
            <FaHeart className="absolute text-gray-200 top-4 left-4" />
          ) : (
            <FaRegHeart className="absolute text-gray-200 top-4 left-4" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movies;
