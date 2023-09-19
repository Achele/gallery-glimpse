import FormikControl from "./FormikControl";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const LoginForm = () => {
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
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain one digit, one lowercase letter, one uppercase letter, and one special character"
      ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className=" w-1/2 my-0 mx-auto">
            <FormikControl
              control="input"
              type="email"
              placeholder="Email address or username"
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
                <Password />
                {showPassword ? "hide" : "show"}
              </span>
              <Link
                to={"/forgotPassword"}
                className="text-anotherBlue text-sm py-2 text-end "
              >
                Forgot your Password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={!formik.isValid}
              className="border bg-primary rounded-full py-1 px-4 w-full text-white my-4 cursor-pointer"
            >
              Log in
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
