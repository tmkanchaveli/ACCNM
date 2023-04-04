import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Founder</h2>
          <p>Tamuna Kanchaveli</p>
          <p>Email: tmkanchaveli@gmail.com</p>
        </div>
        <div className="contact-image">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
          />
        </div>
      </div>
      <p>
        For any inquiries or feedback regarding the ACNM app, please feel free
        to contact me at the email provided above.
      </p>
    </div>
  );
};

export default Contact;
