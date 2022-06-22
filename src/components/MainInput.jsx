import React from "react";
import FormikInput from "./FormikInput";

const MainInput = ({ label, name, type, required, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label className="my-2 text-lg text-white lg:text-4xl md:text-2xl">
        {label}
      </label>
      <FormikInput
        name={name}
        placeholder={placeholder}
        type={type}
        id={name}
        required={required}
      />
    </div>
  );
};

export default MainInput;
