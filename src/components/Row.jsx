import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Movies from "./Movies";

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    // console.log(slider);
    slider.scrollLeft = slider.scrollLeft - 500;
    // console.log("clicked");
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
    // console.log("clicked");
  };

  return (
    <>
      <h2 className="p-4 font-bold text-gray-200 md:text-xl">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="absolute left-0 z-10 hidden ml-2 bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies?.map((items, id) => (
            <Movies key={id} items={items} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="absolute right-0 z-10 hidden ml-2 bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
