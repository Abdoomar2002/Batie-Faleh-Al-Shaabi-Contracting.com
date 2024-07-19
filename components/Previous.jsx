import React, { useEffect } from "react";
import "./Services.css";
import projects from "@/public/previous.json";

const Previous = ({ ar = false }) => {
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
        {ar ? "مشارعينا السابقة" : "Recent Projects"}
      </h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-5" key={index}>
            <div className="card">
              <img
                src={`images/project${index + 1}.jpg`} // Assuming you have corresponding images
                className="card-img-top"
                alt={ar ? "مشروع سابق" : "Previous Project"}
              />
              <div className="card-body">
                <h3 className="card-title">
                  {ar
                    ? project.previous_projects.ar
                    : project.previous_projects.en}
                </h3>
                {project.previous_projects.details &&
                  Object.keys(project.previous_projects.details).map(
                    (detailKey) => (
                      <p key={detailKey} className="card-text">
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
