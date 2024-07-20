// app/ContactUs/page.js
"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setShowSuccess(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    const response = await fetch(
      "http://batie-faleh-al-shaabi-contracting.com/SendEmail.php",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();
    console.log(result);

    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    //setShowError(true);
  };

  return (
    <>
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
                  <Form.Group as={Col} md="6" controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} md="6" controlId="formEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Your Mobile Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>
                <br />
                <Form.Group controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
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
    </>
  );
};

export default ContactUs;
