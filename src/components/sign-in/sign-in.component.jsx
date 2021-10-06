import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput label="email" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
          <FormInput
            label="password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;