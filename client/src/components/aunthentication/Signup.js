import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  animation: ${slideIn} 0.5s forwards;
  ${({ isHidden }) =>
    isHidden &&
    `
    animation: ${slideOut} 0.5s forwards;
  `}
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #f2f2f2;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: rgba(26, 143, 227, 1);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Message = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  color: ${({ isError }) => (isError ? "red" : "green")};
`;

const LinkWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const CustomLink = styled(Link)`
  color: rgba(26, 143, 227, 1);
`;

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const nav = useNavigate();

  function handleChange(e) {
    if (e.target.name === "firstName" || e.target.name === "lastName") {
      // handle first name and last name separately
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    } else {
      // handle other fields normally
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // validate form data, e.g. check if all fields are not empty
    for (const field in formData) {
      if (!formData[field]) {
        setMessage("Please fill in all fields");
        return;
      }
    }
    if (formData.password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      // send sign up request to backend
      const response = await axios.post("/users", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      // navigate to home page if sign up is successful
      if (response.status === 201) {
        nav("/home");
      } else {
        setMessage("Sign up failed");
      }
    } catch (error) {
      setMessage("Sign up failed");
    }
  }

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          id="first-name"
          onChange={handleChange}
          value={formData.firstName}
        />
        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          id="last-name"
          onChange={handleChange}
          value={formData.lastName}
        />
        <Input
          type="email"
          placeholder="Email Address"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          id="confirm-password"
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
        {message && <Message isError={message.includes("Passwords do not match")}>{message}</Message>}
      </Form>
      <LinkWrapper>
        Already have an account? <CustomLink to="/login">Login</CustomLink>
      </LinkWrapper>
    </Container>
  );
}

export default Signup;
