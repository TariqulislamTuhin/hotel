import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import SignUp from "../Form/SignUp";

const Register = (props) => {
    const {
        handleSignUp,
        handleSubmit,
        email,
        password,
        confirmPassword,
        register,
        setEmail,
        setPassword,
        setConfirmPassword,
        setRegister,
      } = props;

  return (
    <div className="col-6 offset-3 mt-5">
      <SignUp
      email={email} 
      password={password} 
      confirmPassword={confirmPassword} 
      register={register} 
      handleSubmit={handleSubmit} 
      handleSignUp={handleSignUp} 
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      setRegister={setRegister}
      />
    </div>
  );
};

export default Register;
