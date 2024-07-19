import React, { useEffect } from "react";
import "./Services.css";
import projects from "@/public/projects.json";

const Services = ({ ar = false }) => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          card.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
