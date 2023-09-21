// import LoginForm from "./LoginForm";

import SignupForm from "./SignupForm";

const SignupFormContainer = () => {
  return (
    <main className="lg:max-w-lg lg:w-11/12 p-4">
      <div>
        <h2 className="text-grey-dark font-bold text-4xl tracking-normal text-center">
          Sign up!
        </h2>
        <p className="text-grey-dark/80 text-center mb-4 tracking-wider text-sm opacity-80 ">
          Explore images on the web for free, forever
        </p>
      </div>
      <SignupForm />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <p className=" text-center text-md text-gray-500 mt-4">
          Already have an account?
          {/* <link
            href="/signup"
            className="font-semibold ml-1 text-primary hover:text-indigo-500"
          >
            Sign Up
          </link> */}
        </p>
        <span className="text-indigo-500"> Login!</span>
      </div>
    </main>
  );
};

export default SignupFormContainer;
