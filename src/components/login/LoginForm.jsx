import FormikControl from "../common/FormikControl";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { UseUserAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import Loading from "../common/Loading";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { signIn } = UseUserAuth();
  const navigate = useNavigate();

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

  const onSubmit = async (values) => {
    const { email, password } = values;
    setLoading(true);
    try {
      await signIn(email, password);
      navigate("/gallery");
    } catch (error) {
      console.error("FIREBASE error", error);
      setLoading(false);
    }
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
              {loading ? <Loading className={"w-5"} /> : "Log in"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
