import { string, object } from "yup";

export const onSubmit = (data) => {
  console.log("On Submit Called", data);
};

export const validationSchema = object().shape({
  email: string().email("Invalid email").required("Email Required"),
  password: string()
    .min(4, "Too Short")
    .max(8, "Too Long")
    .required("Password Required"),
});

export const initialValues = {
  email: "",
  password: "",
};
