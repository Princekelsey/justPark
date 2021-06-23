import React, { useState } from "react";
import TextInput from "../../elements/Input/TextInput";
import Button from "../../elements/button/Button";
import logo from "../../../assets/logo.jpg";
import "./sign.style.css";

interface IFormData {
  username: string;
  password: string;
}

const initialState: IFormData = {
  username: "",
  password: "",
};

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="logo-container">
        <img className="logo" src={logo} alt="JustPark" />
      </div>
      <div className="sign-in-container">
        <form className="left-content" onSubmit={handleSubmit}>
          <h2 className="title">Sign In</h2>
          <div className="mt-24">
            <TextInput
              icon="fas fa-envelope"
              label="User name"
              id="username"
              value={formData.username}
              name="username"
              placeholder="Enter user name"
              onChange={onChange}
            />
          </div>
          <div className="mt-24">
            <TextInput
              icon="fas fa-lock"
              placeholder="Enter password"
              label="Password"
              id="password"
              value={formData.password}
              name="password"
              type="password"
              onChange={onChange}
            />
          </div>
          <span className="mt-16 pb-24 forgot-password">forgot password?</span>
          <div className="mt-24 mb-24">
            <Button block type="submit">
              Sign In
            </Button>
          </div>
        </form>
        <div className="right-content"></div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
