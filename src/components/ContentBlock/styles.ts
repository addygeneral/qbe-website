import { Row } from "antd";
import styled from "styled-components";

export const ContentUpSection = styled("col")`
  position: relative;
  background: rgb(0, 0, 0);
  
  @media only screen and (max-width: 1024px) {
    padding: 4rem 0;
  }
    @media only screen and (max-width: 768px) {
    padding: 3rem 0;
  }

  @media only screen and (max-width: 480px) {
    padding: 2rem 0;
  }
`;
export const ContentSection = styled("section")`
  position: relative;
  padding: 0rem;
  margin-top: 1.5rem;
  margin-bottom: 6rem; 

  @media only screen and (max-width: 1024px) {
    padding: 0rem;
    margin-bottom: 4rem;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;

  @media only screen and (max-width: 768px) {
    margin: 1rem 0 1.5rem 0;
  }

  @media only screen and (max-width: 480px) {
    margin: 0.5rem 0 1rem 0;
  }
`;

export const StyledRow = styled(Row)<{ direction: string }>`
  flex-direction: ${({ direction }) =>
    direction === "left" ? "row" : direction === "right" ? "row-reverse" : "column"};
  text-align: ${({ direction }) => (direction === "center" ? "center" : "initial")};
  justify-content: 
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledImage = styled.img`
  width: 100%; 
  height: auto; 
  display: block; 

  @media only screen and (max-width: 768px) {
    max-width: 80%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const ContentWrapper = styled("div")`
  margin: 0px;
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 768px) {
    padding-top: 3rem;
    max-width: 90%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 480px) {
    padding-top: 2rem;
  }
`;

export const ServiceWrapper = styled("div")`
  justify-content: space-between;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;


  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const MinPara = styled("p")`
  font-size: 13px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 11px;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media only screen and (max-width: 1024px) {
    max-width: 90%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    button {
      margin-bottom: 10px;
      width: 100%;
    }

    button:last-child {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 480px) {
    max-width: 100%;
  }
`;
