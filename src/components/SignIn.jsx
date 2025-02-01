import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { users } from "../db";
import { setEmail, setLoginStatus, setPassword } from "../redux";
import { BottomWarning, Button, Heading, InputBox, SubHeading } from "../ui";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector((state) => state.email.email);
  const password = useSelector((state) => state.password.password);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    let isValidUser = users.some(
      (user) => user.email === email && user.password === password
    );

    if (isValidUser) {
      alert("User Signed in Successfully");
      dispatch(setLoginStatus(true));
      dispatch(setEmail(""));
      dispatch(setPassword(""))
      navigate("/todos");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex h-[800px] w-full items-center justify-center">
      <div className="p-8 w-3/12 shadow-xl rounded-xl">
        <Heading label="Sign In" />
        <SubHeading label="Enter your information to Sign In" />

        <InputBox
          label="Email"
          placeholder="Email"
          extraClasses="mb-2"
          onChange={(e) => dispatch(setEmail(e.target.value))}
          value={email}
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

        <InputBox
          label="Password"
          placeholder="Password"
          extraClasses="mb-2"
          type="password"
          onChange={(e) => dispatch(setPassword(e.target.value))}
          value={password}
        />
        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

        <Button label="Sign In" extraClasses="mb-4 mt-4" onClick={handleSubmit} />

        <BottomWarning label="Don't Have an Account?" buttonText="SignUp" redirectTo="/signup" />
      </div>
    </div>
  );
};

export default SignIn;
