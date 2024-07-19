"use client";
import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Gallery.module.css";

const Gallery = ({ ar = false }) => {
  const gPhoto = [
    ["", 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11],
    [12, 13, 14],
  ];
  return (
    <Container className={`mt-4 ${styles.animateSlideInUp}`} dir="ltr">
      <Row>
        <Col>
          <h1 className="text-center main-color p-3 text-white">
            {ar ? "معرض الصور" : "Gallary"}
          </h1>
          <p className="text-center">
            {ar
              ? "فخورون لتقديم خدمة ممتازة وعلاقات قيّمة طويلة الأمد مع عملائنا"
              : "Proud to present excelent service and a valuable relation with our clients"}
          </p>
          <hr className="my-1" />
          <br />
          <Carousel
            indicators={false}
            interval={3000}
            controls={false}
            wrap={true}
            className={`${styles.carousel} ${styles.heigh}`}
          >
            {gPhoto.map((e, index) => (
              <Carousel.Item className={styles.heigh} key={index}>
                <Row>
                  <Col>
                    <img
                      className=" w-75 "
                      src={`images/g${e[0]}.jpg`}
                      alt="Image 1"
                    />
                  </Col>
                  <Col>
                    <img
                      className=" w-75 "
                      src={`images/g${e[1]}.jpg`}
                      alt="Image 2"
                    />
                  </Col>
                  <Col>
                    <img
                      className=" w-75 "
                      src={`images/g${e[2]}.jpg`}
                      alt="Image 3"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
