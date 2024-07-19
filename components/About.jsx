"use client";
import React, { useEffect, useRef } from "react";
import "./About.css";
import data from "@/app/data.json";
const About = ({ ar = false }) => {
  const observerRef = useRef(null);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observerRef.current = observer;

    const cards = document.querySelectorAll(`.card`);
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  return (
    <div
      dir={ar ? "rtl" : "ltr"}
      className="container wow animate__animated animate__slideInUp"
    >
      <h2 className="text-center mb-5 mt-5 main-color text-white p-3">
        <i className="fas fa-home"></i> {ar ? "اهداف الشركة" : "Our Goals"}
      </h2>
      <div className="row">
        <div className="col-md-4 mb-5">
          <div className="card">
            <img
              src="/images/mission.png"
              className="card-img-top"
              alt="اعتماد شركة تصنيف خدمة المدن السعودية"
            />
            <div className="card-body">
              <h3 className="card-title"> {ar ? "مهمتنا" : "Our Mission"}</h3>
              <p className="card-text">{data.mission[ar ? "ar" : "en"]}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card">
            <img
              src="images/vision.png"
              className="card-img-top"
              alt="الخدمات"
            />
            <div className="card-body">
              <h3 className="card-title"> {ar ? "رؤيتنا" : "Our Vision"}</h3>
              <p className="card-text">{data.vision[ar ? "ar" : "en"]}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card">
            <img
              src="images/value.png"
              className="card-img-top"
              alt="الخدمات"
            />
            <div className="card-body">
              <h3 className="card-title">
                {" "}
                {ar ? "اختصاصنا" : "Our Specialty"}
              </h3>
              <p className="card-text">{data.specialty[ar ? "ar" : "en"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
