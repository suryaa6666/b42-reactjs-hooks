//import useState here
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

function ExampleForm() {
  //create state with attribute fullname, email & password here..
  let [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    // setState here
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //print state value with console.log here
    console.log(form);
  };

  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center vh-100">
        <Col md="6">
          <Form onSubmit={handleOnSubmit}>
            <div className="text-center h3">Register</div>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                value={form.fullname}
                name="fullname"
                size="sm"
                type="text"
                placeholder="Enter Full Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                value={form.email}
                name="email"
                size="sm"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                value={form.password}
                name="password"
                size="sm"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" size="sm">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ExampleForm;
