import React, { useState } from "react";
import FormInput from "./../forminput/forminput.component";
import CustomButton from "./../custombutton/custombutton.component";
import { auth, createUserDocument } from "./../../firebase/firebase.utils";
import "./signup.styles.scss";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    await createUserDocument(user, { displayName });

    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    try {
    } catch (error) {
      console.log("ERROR occurred while signing up" + error.message);
    }
  };

  return (
    <div className="signup">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="signupform" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          label="Name"
          value={displayName}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
