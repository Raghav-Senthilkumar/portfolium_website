import React from "react";
import StarIcon from "./StarIcon";

const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="container-fluid px-4">
        <div className="row mt-5 pt-5">
          <div className="col-12 mb-5 pb-5">{/* Spacer for layout */}</div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <StarIcon />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-10">
            <h1 className="hero-title">
              Developing engaging and efficient systems
              <br />
              that combine software development and AI-based technologies.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
