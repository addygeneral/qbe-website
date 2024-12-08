import styled from "styled-components";
import { Link } from "react-router-dom";


export const SocialLinkContainer = styled.div`
  display: flex;
  justify-content: left; 
  align-items: center;
  gap: 15px; 
  flex-wrap: wrap;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 40px; 
      height: 40px;
      transition: transform 0.2s ease-in-out, fill 0.2s ease-in-out;

      &:hover,
      &:focus {
        transform: scale(1.1); 
        fill: rgb(255, 130, 0);
      }
    }
  }

  @media screen and (max-width: 600px) {
    gap: 10px;

    a svg {
      width: 30px; 
      height: 30px;
    }
  }
`;

export const FooterSection = styled("footer")`
  background: rgb(0, 0, 0);
  padding: 1.5rem 1rem;
 width: 100%;
  margin: 0; 

   @media screen and (max-width: 768px) {
    padding: 2rem 0.5rem;
    margin: 0; 
  }
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #ffff;
  margin-bottom: 0;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled("section")`
  background: rgb(241, 242, 243);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #ffff;
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link)`
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  color: #CCA351;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: flex;          
  align-items: center;  
  margin-bottom: 0.625rem; 
  gap: 10px;  
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: rgb(255, 130, 0);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 0) wavy underline;
  }
`;

export const Chat = styled("p")`
  color: #ffff;
  max-width: fit-content;
  border-bottom: 1px solid #ffff;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid rgb(255, 130, 0);
    color: rgb(255, 130, 0);
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 0);
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #ffff;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #ffff;
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
