import FormikControl from "../common/FormikControl";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/,
        "Password must contain one digit, one lowercase letter, one uppercase letter, and one special character"
      ),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="  ">
            <FormikControl
              control="input"
              type="email"
              placeholder="Email address"
              name="email"
            />

            <div className="relative">
              <FormikControl
                control="input"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                name="password"
              />
              <span
                onClick={toggleShowPassword}
                className="absolute right-0  top-5 md:top-6   flex items-center pr-3 cursor-pointer"
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>
            <button
              type="submit"
              disabled={!formik.isValid}
              className="border bg-indigo-500  rounded py-1 px-4 w-full text-white my-4 cursor-pointer hover:bg-indigo-800"
            >
              Log in
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
