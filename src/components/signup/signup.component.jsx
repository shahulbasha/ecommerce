import React from "react";
import FormInput from "./../forminput/forminput.component";
import CustomButton from "./../custombutton/custombutton.component";
import { auth, createUserDocument } from "./../../firebase/firebase.utils";
import "./signup.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    await createUserDocument(user, { displayName });

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    try {
    } catch (error) {
      console.log("ERROR occurred while signing up" + error.message);
    }
  };

  render() {
    return (
      <div className="signup">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="signupform" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            label="Name"
            value={this.state.displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
