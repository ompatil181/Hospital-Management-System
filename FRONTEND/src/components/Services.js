import React from 'react';
import Service from "./Services.css";
const Services = () => {
  return (
    <div className="image-card">
      <div className="image-container">
        <img src="https://cdn-icons-png.flaticon.com/512/978/978906.png" alt="Image 1" />
        <h5>ICU & OT</h5>
        <p>Well equipped 15-bed I.C.U. & modular operation theatre</p>
      </div>
      <div class = "vertical"></div>
      <div className="image-container">
        <img src="https://cdn-icons-png.flaticon.com/512/4320/4320371.png" alt="Image 2" />
        <h5>SUPPORT 24/7</h5>
        <p>24 x 7 well-trained doctors & staff available.</p>
      </div>
      <div class = "vertical"></div>
      <div className="image-container">
        <img src="https://cdn-icons-png.flaticon.com/512/3063/3063206.png" alt="Image 3" />
        <h5>Under One Roof</h5>
        <p>C – Arm, Digital X-ray & Scanogram for all Orthopaedic Surgeries.</p>
      </div>
    </div>
  );
};

export default Services;

