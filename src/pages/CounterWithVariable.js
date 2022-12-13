import { useReducer, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

// Declare counter variable here ...
let counter = 0;

function CounterWithVariable() {
  // Init useReducer for forceUpdate component here ...
  const [, forceUpdate] = useReducer((x) => {
    let y = x + 1
    console.log("data y", y);
    return y;
  }, 100);

  function Add() {
    counter += 1;
    // console.log("add", counter);
    forceUpdate();
  }

  function Less() {
    counter = counter - 1;
    // console.log("less", counter);
    forceUpdate();
  }

  console.log("kerender ulang")

  return (
    <Container>
      <Row
        className="d-flex align-items-center justify-content-center"
        style={{ height: "50vh" }}
      >
        <Col md="6 text-center">
          <h4>Counter with Variable</h4>
          <h1>{counter}</h1>
          <Button onClick={Add} size="sm" className="me-3">
            Add
          </Button>
          <Button onClick={Less} size="sm">
            Less
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CounterWithVariable;
