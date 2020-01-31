import React from "react"

import { Form, Button } from "react-bootstrap"

const contactForm = () => (
  <div>
    <Form
      style={{
        marginLeft: "60px",
        marginRight: "60px",
        borderStyle: "solid",
        borderWidth: "1px",
        padding: "20px",
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Name" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="email" placeholder="Subject" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="5" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
)

export default contactForm
