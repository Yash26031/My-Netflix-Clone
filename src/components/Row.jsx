import React from "react";

const Row = ({ title, fetchUrl }) => {
  return (
    <>
      <h2 className="text-gray-200 md:text-xl p-4 font-bold">{title}</h2>
    </>
  );
};

export default Row;
