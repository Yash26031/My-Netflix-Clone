import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import MainInput from "../components/MainInput";
import { initialValues, onSubmit, validationSchema } from "../FormikAction";

const SignUp = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex flex-col items-center justify-center w-full h-screen p-10 bg-black/60">
          <div className="flex flex-col">
            <MainInput
              label="Email or Phone Number"
              name="email"
              placeholder="Email"
              type="email"
              required
            />
            <MainInput
              label="Password"
              name="password"
              placeholder="Password"
              type="text"
              required
            />
            <button className="px-4 py-2 my-2 text-2xl font-bold md:w-[500px] lg:w-[700px] text-white bg-blue-600 border-2 border-blue-800 rounded-md w-80 hover:bg-blue-500">
              SignUp
            </button>
            <div className="my-5 lg:flex ">
              <p className="text-lg text-gray-300">
                Already have an account ?{" "}
              </p>
              <Link
                className="text-xl text-white underline uppercase lg:ml-5"
                to="../Sign-In"
              >
                Click here to logiIn.
              </Link>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUp;
