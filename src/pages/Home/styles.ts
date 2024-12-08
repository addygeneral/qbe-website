import styled from "styled-components";

export const WhatWeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 40px 140px 0; 
  margin-bottom: 90px;
  background: linear-gradient(
    to right,
    #cca351 35%, /* 40% width with color #CCA351 */
    #faf5eb 30%  /* Remaining 60% width with color #FAF5EB */
  );

  @media (max-width: 768px) {
    flex-direction: column;
    background: #faf5eb; /* Use a single color for small screens */
    padding: 20px;
  }
`;

// Flex container for the row
export const FlexCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding: 10px 0;
  width: 100%;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the cards on smaller screens */
    gap: 20px;
  }
`;

// Card for each content item (Our Vision or Our Mission)
export const FlexCard = styled.div`
  flex: 0 0 45%; /* 48% width for each card, leaving space for the gap */
  background-color: #faf5eb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  text-align: left;;
  padding: 20px;

  h6 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 20px;

  }

  p {
    margin: 0;
    color: #BAB9B9;
    font-size: 15px;
  }
.text-content {
    display: flex;
    flex-direction: column; /* Align title and paragraph on the same row */
    align-items: left; /* Align title and content vertically */
  }

  img {
    width: 50px; /* Adjust image size */
    height: auto;
    margin-right: 15px; /* Add space between image and text */
  }

  @media (max-width: 768px) {
    flex: 0 0 100%; /* Full width on small screens */
  }
`;

