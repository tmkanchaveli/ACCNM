import React from "react";
import "./About.css";

const About = () => {
  // Replace the URL with the URL of the image you want to use
  const imageUrl =
    "https://www.rent.com/blog/wp-content/uploads/2023/02/apartment_building.jpg";

  return (
    <div className="about-container">
      <h1>About ACNM</h1>
      <img src={imageUrl} alt="Apartment complex" className="about-image" />
      <div className="overview">
        <h2>Overview</h2>
        <p>
          ACNM (Apartment Complex Neighborhood Management) is an innovative
          mobile app designed to revolutionize the way residents of apartment
          complexes in Tbilisi, Georgia, manage their communal living
          arrangements. Our goal is to provide a seamless, user-friendly
          platform for communication, task management, and bill payments,
          ultimately enhancing the quality of life for apartment complex
          residents.
        </p>
        <p>
          ACNM targets apartment complex residents in Tbilisi, Georgia, who
          value convenience, organization, and clear communication in managing
          their communal living arrangements. Our app offers a range of
          services, including apartment complex-specific groups, task
          management, bill payments, and integrations with local utility
          providers and government portals.
        </p>
      </div>
      <div className="my-apartment">
        <h2>My Apartment</h2>
        <p>
          ACNM's "My Apartment" feature provides residents with a one-stop-shop
          for all apartment-related tasks, including maintenance requests, rent
          payments, and community events. Our app's task management system
          allows residents to quickly and easily report issues or request
          services, with real-time updates on the status of their requests.
        </p>
        <p>
          With ACNM, residents can also easily view and pay their rent online,
          eliminating the need for paper checks or in-person visits to the
          management office. Additionally, our app's community events calendar
          keeps residents informed of upcoming events and activities in their
          complex, fostering a sense of community and belonging.
        </p>
      </div>
    </div>
  );
};

export default About;
