import LogSign from "../components/LogSign";
import Signup from "../components/Signup";

const SignupPage = () => {
    return(
        <>
        
            <LogSign
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup/>
        </>
    );
};
export default SignupPage;
