import React from "react";
import { useField } from "formik";

const FormikInput = ({ id, name, type, ...rest }) => {
  const [feild, meta] = useField(name);
  return (
    <div className="flex flex-col mb-5">
      <input
        onChange={feild.onChange}
        onBlur={feild.onBlur}
        value={feild.value}
        id={id}
        type={type || "text"}
        {...rest}
        className="p-2 text-gray-700 md:w-[500px] lg:w-[700px] md:p-3 md:text-2xl border-2 border-gray-700 rounded-md w-80"
      ></input>

      {meta.error && meta.touched && (
        <span className="text-red-500 ">{meta.error}</span>
      )}
    </div>
  );
};

export default FormikInput;
