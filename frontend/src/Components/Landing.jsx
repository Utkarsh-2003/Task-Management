import React from "react";
import LandingImage from "../Image/image.png"

const Landing = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <img src={LandingImage} alt="landing page" />
        </div>
        <div className="col-lg-6 fs-4">
          Welcome to Task Management Application, your ultimate productivity
          companion! Simplify your workflow, prioritize tasks, and stay
          organized with our intuitive and user-friendly interface. Collaborate
          seamlessly with your team, track progress in real-time, and achieve
          your goals effortlessly. Take control of your day with Task Management
          Application – where productivity meets simplicity.
        </div>
      </div>
    </>
  );
};

export default Landing;
