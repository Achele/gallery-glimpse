import Aside from "../components/common/Aside";
import SignupFormContainer from "../components/signup/SignupFormContainer";

const Signup = () => {
  return (
    <>
      <main className="md:grid md:grid-cols-2 h-screen">
        <Aside />
        <section className={`flex items-center justify-center `}>
          <SignupFormContainer />
        </section>
      </main>
    </>
  );
};

export default Signup;
