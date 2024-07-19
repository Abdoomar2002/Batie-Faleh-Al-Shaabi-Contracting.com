// components/CarouselComponent.js
"use client";
import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = ({ ar = false }) => {
  return (
    <Carousel indicators={false} controls={false}>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h1 class="bg-dark p-4 wow animate__animated animate__slideInUp">
            {ar
              ? "تُظهر هذه الصورة مشروعنا الأول، الذي تم تنفيذه بجودة عالية ودقة."
              : "This slide showcases our first project, executed with high quality and precision."}
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h1 class="bg-dark p-4 wow animate__animated animate__slideInUp">
            {ar
              ? "تمثل هذه الصورة أحد مشاريع البنية التحتية التي نفتخر بها."
              : "This slide represents one of the infrastructure projects we are proud of."}
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h1 class="bg-dark p-4 wow animate__animated animate__slideInUp">
            {ar
              ? "يعرض هذا المشروع التزامنا بالجودة والتميز في كافة أعمالنا."
              : "This project demonstrates our commitment to quality and excellence in all our work."}
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
