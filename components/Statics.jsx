import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Statics.module.css";
import data from "@/app/data.json";
const Statics = ({ ar = false }) => {
  useEffect(() => {
    const counters = document.querySelectorAll(`.${styles.counter}`);
    counters.forEach((counter) => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 200;
        if (current < target) {
          counter.innerText = `${Math.ceil(current + increment)}`;
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <section
      className={`${styles.section} text-center main-color p-3 text-white`}
    >
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-white">{ar ? "من نحن" : "About Company"}</h2>
            <p>{data.company_history[ar ? "ar" : "en"]}</p>
          </Col>
        </Row>
        <Row id="speed">
          <Col md={4}>
            <div className={styles.aboutItem}>
              <i className="fas fa-home"></i>
              <h3> {ar ? "فنيين خبراء" : "experts"}</h3>
              <p className={styles.counter} data-target="217">
                0
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.aboutItem}>
              <i className="fas fa-wrench"></i>
              <h3> {ar ? "المشاريع المنجزة" : "Completed Projects"}</h3>
              <p className={styles.counter} data-target="4870">
                0
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.aboutItem}>
              <i className="fas fa-paint-brush"></i>
              <h3> {ar ? "العملاء الراضين" : "Previous customers"}</h3>
              <p className={styles.counter} data-target="9458">
                0
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Statics;
