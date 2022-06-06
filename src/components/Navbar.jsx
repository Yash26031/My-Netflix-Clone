import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute  w-full">
      <Link to="/" className="text-4xl font-bold text-red-600 cursor-pointer">
        NETFLIX
      </Link>
      <div>
        <Link to="Sign-In" className="pr-4 text-white">
          Sign In
        </Link>
        <Link
          to="Sign-Up"
          className="px-4 py-2 text-white bg-red-600 rounded cursor-pointer"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
