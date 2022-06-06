import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-10 bg-black/60">
      <div className="flex flex-col">
        <label className="my-2 text-lg text-white lg:text-4xl md:text-2xl">
          Email or Phone Number
        </label>
        <input
          className="p-2 mb-5 text-gray-700 border-2 lg:w-[700px] md:p-3 md:text-2xl border-gray-700 rounded-md w-80 md:w-[500px]"
          placeholder="Please enter your email"
        ></input>
        <div className="flex flex-col">
          <label className="my-2 text-lg text-white lg:text-4xl md:text-2xl">
            Password
          </label>
          <input
            className="p-2 text-gray-700 md:w-[500px] lg:w-[700px] mb-5 md:p-3 md:text-2xl border-2 border-gray-700 rounded-md w-80"
            placeholder="Please enter your Password"
          ></input>
        </div>
        <button className="px-4 py-2 my-2 text-2xl font-bold md:w-[500px] lg:w-[700px] text-white bg-blue-600 border-2 border-blue-800 rounded-md w-80 hover:bg-blue-500">
          SignUp
        </button>
        <div className="my-5 lg:flex ">
          <p className="text-lg text-gray-300">Already have an account ? </p>
          <Link
            className="text-xl text-white underline uppercase lg:ml-5"
            to="../Sign-In"
          >
            Click here to logiIn.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
