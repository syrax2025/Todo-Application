import React from "react";
import { useDispatch } from "react-redux";
import { setEmail, setName, setPassword } from "../redux";
import { BottomWarning, Button, Heading, InputBox, SubHeading } from '../ui';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    const { name, value } = e.target;
    if (name === "name") dispatch(setName(value));
    else if (name === "email") dispatch(setEmail(value))
    else dispatch(setPassword(value))
  }

  const handleSubmit = () =>{
    
    alert(`User Signed Up Successfully`);
  }

  return (
    <div className="flex h-[800px] w-full items-center justify-center">
 
    <div className="p-8 w-3/12 shadow-xl rounded-xl">
      <Heading label={"Sign Up"} />
      <SubHeading label={"Enter your information to create account"} />

      <InputBox
        label={"Name"}
        placeholder={"Name"}
        extraClasses="mb-4"
        onChange={(e) => {
          handleChange(e)
        }}
      />
      <InputBox
        label={"Email"}
        placeholder={"Email"}
        extraClasses="mb-4"
        onChange={(e) => {
          handleChange(e)
        }}
      />
      <InputBox
        label={"Password"}
        placeholder={"Password"}
        extraClasses="mb-4"
        type={"password"}
        onChange={(e) => {
          handleChange(e)
        }}
      />

      <Button
        label={"Sign Up"}
        extraClasses="mb-4"
        onClick={handleSubmit}
      />

      <BottomWarning
        label={"Already Have an Account ?"}
        buttonText={"SignIn"}
        redirectTo={"/signin"}
      />
    </div>
    </div>
  );
};

export default SignUp;
