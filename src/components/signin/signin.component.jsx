import React from "react";
import "./signin.styles.scss";
import FormInput from "./../forminput/forminput.component";
import CustomButton from "./../custombutton/custombutton.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account!</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
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
          <CustomButton type="submit">SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
