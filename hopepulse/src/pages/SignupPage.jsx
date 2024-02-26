import LogSign from "../components/LogSign";
import Signup from "../components/Signup";

const SignupPage = () => {
    return(
        <div className="flex">
          <div className="w-2/6 bg-pink-50 h-screen flex flex-col">
              <div className="h-full flex flex-col justify-center text-grayish m-6 space-y-2 -mt-40 ml-8">
                  <h1 className="text-xl font-normal mb-6">Welcome to hopepulse</h1>
                  <p className="text-2xl font-bold">
                  Be a Hero: Join Hopepulse!
                  </p>
              </div>
          </div>
          <div className="w-4/6 rounded-lg bg-fafafa">
            <LogSign
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup/>
            </div>
        </div>
    );
};
export default SignupPage;
