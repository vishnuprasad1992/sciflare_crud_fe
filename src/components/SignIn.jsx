import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../apiServices";

export default function SignIn() {
  const history = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = await LoginService(data);
      if (loginData?.status === 200){
        localStorage.setItem("token", loginData?.data?.token);
        localStorage.setItem("userData", JSON.stringify(loginData?.data?.userData));
        history('/dashboard')
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        className="position-absolute my-5 p-5 start-50 translate-middle-x bg-light text-center w-95 p-1 mb-3"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p
          className="mb-0  text-center mt-5 cursor-pointer text-decoration-underline"
          onClick={() => history("/signup")}
        >
          Dont you have an account?{" "}
          <span className="text-primary fw-bold">Sign Up</span>
        </p>
      </Form>
    </Container>
  );
}
