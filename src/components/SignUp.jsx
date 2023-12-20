import { useState } from "react";
import {
  InputGroup,
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SignupService } from "../apiServices";

export default function SignUp() {
  const history = useNavigate();
  const [data, setData] = useState({ email: "", password: "",mobile:"",name:"",confirmPassword:"" });
  const [errText, setErrText] = useState("")

  const handleDataChange = (e)=>{
    e.preventDefault();
    const name = e.target.name
    const value = e.target.value
    setData({...data,[name]:value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      if(!data.password || !data.email || !data.mobile){
        setErrText('pls enter the required fields')
        return 
      }
      if(data.password !== data.confirmPassword){
        setErrText('password not matching')
        return 
      }
      const signupData = await SignupService(data);
      if (signupData?.status === 200){
        history('/signin')
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                <p className="text-danger">{errText}</p>
                <Form onSubmit={handleSubmit}> 
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formFullName"
                    >
                      <Form.Label className="text-center">
                        Your full name
                      </Form.Label>
                      <Form.Control type="text" placeholder="Enter name" name ='name' onChange={handleDataChange}/>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formPhoneNumber"
                    >
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter phone number"
                        name ='mobile' onChange={handleDataChange}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formUsername"
                    >
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <InputGroup>
                        <Form.Control type="email" placeholder="Enter email" name ='email' onChange={handleDataChange}/>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" name ='password' onChange={handleDataChange}/>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm Password" name ='confirmPassword' onChange={handleDataChange}/>
                    </Form.Group>
                  </Row>
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Sign Up
                    </Button>
                  </div>
                </Form>
                <div className="mt-3">
                  <p
                    className="mb-0  text-center"
                    onClick={() => history("/")}
                  >
                    Already have an account?{" "}
                    <span className="text-primary fw-bold">Sign In</span>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
