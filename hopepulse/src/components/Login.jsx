import React, { useState, useContext } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import FormExtra from './FormExtra';
import { AuthContext } from '../contexts/Authcontext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useContext(AuthContext);
    const fields=loginFields;
    let fieldsState = {};
    fields.forEach(field=>fieldsState[field.id]='');
    const [loginState,setLoginState]=useState(fieldsState);
    const navigate = useNavigate();

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(loginState)
      login(loginState)
      .then(success => {
        if (success) {
          navigate('/'); // Redirect to root page after successful login
        }
      })
      .catch(error => {
        console.error('Login failed:', error);
        console.log(error.response.data);  // Print the error response data
      });
    }

    return(
        <form className="w-full mt-8 space-y-4 mx-auto" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
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
        </div>
        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>
      </form>
    );
};
export default Login;
