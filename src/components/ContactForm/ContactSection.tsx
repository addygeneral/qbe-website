import React from "react";
import {
  ColumnWrapper,
  ContactInfoWrapper,
  SocialLink,
  SocialLinkContainer,
  SocialMediaWrapper,
} from "./styles";

export const ContactSection = () => {
  const contactData = [
    {
      title: "Call Us",
      details: ["050 6544393 / 030 244 1112", "024 529 9268"],
    },
    {
      title: "Send Us an Email",
      details: ["info@qbelimited.com", "qbeghana@gmail.com"],
    },
    {
      title: "Visit Us",
      details: ["8432 George Bush Road,", "Ghana, Accra"],
    },
  ];

  return (
      <ColumnWrapper>
        {/* Contact Information */}
        <ContactInfoWrapper>
        {contactData.map((item, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1.5rem",
        padding: "1rem",
      }}
    >
      {/* Image Column */}
      <div style={{ flexShrink: 0 }}>
        <img
          src={
            item.title === "Call Us"
              ? "/img/svg/call.svg"
              : item.title === "Send Us an Email"
              ? "/img/svg/mail.svg"
              : "/img/svg/location.svg"
          }
          alt={item.title}
          style={{ width: "48px", height: "49px" }}
        />
      </div>

      {/* Text Column */}
      <div>
        <h3 style={{ margin: 0, fontSize: "1.3rem", fontWeight: "bold" }}>
          {item.title}
        </h3>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {item.details.map((detail, i) => (
            <li key={i} style={{ fontSize: "0.9rem", color: "#333" }}>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
        </ContactInfoWrapper>

        {/* Social Media Section */}
        <SocialMediaWrapper>
            <h3>Follow Us</h3>
            <SocialLinkContainer>
                <SocialLink href="/" src="img/svg/linkedin.svg" />
                <SocialLink href="/" src="/img/svg/instagram.svg" />
                <SocialLink href="/" src="/img/svg/facebook.svg" />
                <SocialLink href="/" src="/img/svg/twitter.svg" />
            </SocialLinkContainer>

        </SocialMediaWrapper>
      </ColumnWrapper>
    
  );
};
