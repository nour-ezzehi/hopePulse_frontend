import LogSign from "../components/LogSign";
import Login from "../components/Login"

const LoginPage = () => {
    return(
      <>
          <LogSign
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/signup"
            />
            <Login />
        </>
    )
};
export default LoginPage;
