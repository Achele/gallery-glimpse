import Aside from "../components/common/Aside";
import LoginFormContainer from "../components/login/LoginFormContainer";

const Login = () => {
  return (
    <>
      <main className="md:grid md:grid-cols-2 h-screen">
        <Aside />
        <section className={`flex items-center justify-center `}>
          <LoginFormContainer />
        </section>
      </main>
    </>
  );
};

export default Login;
