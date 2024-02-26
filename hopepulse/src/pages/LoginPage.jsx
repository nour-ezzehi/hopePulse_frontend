import LogSign from "../components/LogSign";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="flex">
      <div className="w-2/6 bg-pink-50 h-screen flex flex-col">
        <div className="h-full flex flex-col justify-center text-grayish m-6 space-y-2 -mt-40 ml-8">
          <h1 className="text-xl font-normal mb-6">Welcome back!</h1>
          <p className="text-2xl font-bold">Sign in to hopepulse</p>
        </div>
      </div>
      <div className="w-4/6 rounded-lg bg-fafafa">
        <LogSign
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
