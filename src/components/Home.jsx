

import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component

function Home({ onLogout }) {
  return (
    <div>
      <div className="main-content">
        <h1>Welcome to Our Medical Center</h1>
        <p>
          At our medical center, we are committed to providing the highest
          quality healthcare services to our patients. Our team of experienced
          doctors and healthcare professionals are here to take care of you and
          your family.
        </p>
        <h2>Services We Offer:</h2>
        <ul>
          <li>Pathology Testing</li>
          <li>Radiology Services</li>
          <li>Specialized Treatments</li>
        </ul>
        <p>
          Whether you need a routine check-up, specialized treatment, or medical
          advice, we are here to assist you.
        </p>
        <p>Contact us today to schedule an appointment or learn more about our services.</p>
      </div>
      <Navbar onLogout={onLogout} /> 
    </div>
  );
}

export default Home;
