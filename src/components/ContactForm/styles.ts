import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;
  margin-left: 6rem;
  margin-right: 6rem;

  

  @media only screen and (max-width: 1024px) {
    padding: 1rem 0;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media only screen and (max-width: 576px) {
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 0;
  }
     @media only screen and (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 0);
  height: 0.775rem;
  padding: 0 0.675rem;
`;
export const Header = styled("h2")`
  text-align: center; 
  font-size: 3rem; 
  font-weight: bold;
  margin-bottom: 2rem;
  color: #000;  
  font-family: 'Montserrat;

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
    text-align: left;

  }

  @media only screen and (max-width: 480px) {
    font-size: 2rem;
    text-align: left;
  }
`;

export const ButtonContainer = styled("div")`
  text-align: left;  
  position: relative;
  

  @media only screen and (max-width: 480px) {
    padding-top: 0.75rem;
    text-align: center;
  }
`;

export const ColumnWrapper = styled("div")`
  background: #fff; 
  border-radius: 40px; 
  padding: 3rem; 

   &:first-of-type {
    margin-left: 1rem;
  }
  
  &:last-of-type {
    margin-right: 1rem; 
  }

  @media only screen and (max-width: 768px) {
    border-radius: 15px;
    padding: 1.5rem;
    margin: 0.5rem;
  }

  @media only screen and (max-width: 480px) {
    padding: 1rem;
    margin: 0.5rem;
  }
`;
export const SocialLinkContainer = styled("div")`
  display: flex;
  gap: 0.8rem;
  justify-content: flex-start;
  margin-top: 1rem;
  
    @media only screen and (max-width: 480px) {
    flex-direction: row;
    align-items: center;
  }

`;


export const SocialLink = styled.a<{ src: string }>`
  display: inline-block;
  margin-left: 1rem;
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
export const ContactInfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 0;
    margin-bottom: 0.5rem;
    color: #CCA351 !important;
    
    text-align: left !important;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 1rem;
      color: #000 !important;
      line-height: 1.5;
    }
  }
`;

export const SocialMediaWrapper = styled("div")`
  margin-top: 2rem;
  text-align: center;

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin: 0;
    color: #000 !important;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;

    button {
      background: #f0f0f0;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1rem;
      color: #333;
      transition: background 0.3s ease;

      &:hover {
        background: rgba(255, 130, 0, 0.8);
      }
    }
  }
`;