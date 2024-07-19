"use client";
import React, { useEffect, useRef } from "react";
import "./Services.module.css";
import projects from "@/public/projects.json";

const Services = ({ ar = false }) => {
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
      <h2 className="text-center mb-5 mt-2 main-color text-white p-3">
        <i className="fas fa-tools"></i>{" "}
        {ar ? "نطاق مشارعينا" : "Projects Scope"}
      </h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-5" key={index}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                  {ar ? project.project_scope.ar : project.project_scope.en}
                </h3>
                <p className="card-text">
                  {ar ? project.project_scope.ar : project.project_scope.en}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
