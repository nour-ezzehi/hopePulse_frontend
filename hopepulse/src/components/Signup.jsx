import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const fields = signupFields;
  let fieldsState = {};
  fields.forEach(field => (fieldsState[field.id] = ''));
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignupState(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState)
    axios.post('http://127.0.0.1:8000/auth/users/', signupState)
      .then(response => {
        console.log('Signup successful:', response.data);
        console.log(signupState)
        if (response.data && response.data.user_is_active) {
          console.log('Account activated. Redirecting to login page.');
          navigate('/login'); // Redirect to login page after successful signup
        } else {
          console.log('Account activation pending. Redirecting to pending activation page.');
          navigate('/pending-activation'); // Redirect to pending activation page
        }
      })
      .catch(error => {
        console.error('Signup failed:', error.response.data);
        // Handle signup failure, display error message to the user
      });
  }

  return(
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
      {
        fields.map(field =>
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.name === 'email-address' ? 'email' : field.name]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        )
      }
      <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
};

export default Signup;
