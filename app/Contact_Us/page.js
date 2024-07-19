"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Contact.css";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccess(true);
          setShowError(false);
        },
        (error) => {
          console.log(error.text);
          setShowError(true);
          setShowSuccess(false);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="main-color text-white p-5">
      <Container>
        <Row>
          <Col style={{ margin: "auto", width: "100%" }}>
            <Alert
              variant="success"
              dismissible
              show={showSuccess}
              onClose={() => setShowSuccess(false)}
            >
              <Alert.Heading>Success!</Alert.Heading>
              Your email has been sent successfully.
            </Alert>
            <Alert
              variant="danger"
              dismissible
              show={showError}
              onClose={() => setShowError(false)}
            >
              <Alert.Heading>Error!</Alert.Heading>
              There was an error sending your email.
            </Alert>
            <Form id="fupForm" name="form1" onSubmit={handleSubmit}>
              <Row>
                <Form.Group as={Col} md="6" controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" name="email" required />
                </Form.Group>
              </Row>
              <Form.Group controlId="formPhone">
                <Form.Label>Your Mobile Number</Form.Label>
                <Form.Control type="tel" name="phone" required />
              </Form.Group>
              <br />
              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" required />
              </Form.Group>
              <br />
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="10" name="message" required />
              </Form.Group>
              <br />
              <div className="text-center">
                <Button variant="primary" type="submit" className="mb-2">
                  Send Email
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
