import styled from "styled-components";

export const StyledContainer = styled("div")`
  display: block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`;

export const StyledTextArea = styled("textarea")`
  resize: none;
  font-size: 1rem;
  height: 185px;
  width: 100%; /* Occupies full width */
  max-width: 800px; /* Restrict maximum width for better UX on large screens */
  margin: 0 auto; /* Center align the text area */
  display: block;
`;

export const Label = styled("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
  color: rgb(0, 0, 0);
`;
