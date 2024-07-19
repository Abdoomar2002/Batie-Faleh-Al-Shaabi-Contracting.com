"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Services.module.css"; // Changed to CSS modules for better handling in Next.js
import projects from "@/public/previous.json";

const Previous = ({ ar = false }) => {
  const observerRef = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observerRef.current = observer;

    const cards = document.querySelectorAll(`.${styles.card}`);
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
      className={`container wow animate__animated animate__slideInUp`}
    >
      <h2 className="text-center mb-5 mt-2 main-color text-white p-3">
        <i className="fas fa-tools"></i>{" "}
        {ar ? "مشارعينا السابقة" : "Recent Projects"}
      </h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-5" key={index}>
            <div className="card">
              <img
                src={`/images/project${index + 1}.jpg`} // Make sure the images are placed in the public/images directory
                className={`card-img`}
                alt={ar ? "مشروع سابق" : "Previous Project"}
              />
              <div className={"card-body"}>
                <h3 className={"card-title"}>
                  {ar
                    ? project.previous_projects.ar
                    : project.previous_projects.en}
                </h3>
                {project.previous_projects.details &&
                  Object.keys(project.previous_projects.details).map(
                    (detailKey) => (
                      <p key={detailKey} className={"card-text"}>
                        {ar
                          ? project.previous_projects.details[detailKey].ar
                          : project.previous_projects.details[detailKey].en}
                      </p>
                    )
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Previous;
