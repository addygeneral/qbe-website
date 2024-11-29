import { Row } from "antd";
import styled from "styled-components";

export const ContentUpSection = styled("col")`
  position: relative;
  background: rgb(0, 0, 0);
  

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;
export const ContentSection = styled("section")`
  position: relative;
  padding: 0rem;

  @media only screen and (max-width: 1024px) {
    padding: 0rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)<{ direction: string }>`
  flex-direction: ${({ direction }) =>
    direction === "left" ? "row" : direction === "right" ? "row-reverse" : "column"};
  text-align: ${({ direction }) => (direction === "center" ? "center" : "initial")};
`;

export const StyledImage = styled.img`
  width: 100%;  // Ensures the image stretches to cover the full width
  height: auto; // Maintain aspect ratio
  display: block; // Ensures no extra space below the image
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
