import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "#CCA351"};
  color: ${(p) => (p.color ? "#000" : "#00000")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #CCA351;
  border-radius: 40px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 250px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
  white-space: nowrap;
  text-align: center; 
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 0);
    background-color: rgb(255, 130, 0);
  }
     @media (max-width: 768px) {
    max-width: none;  // Allow the button to extend to fit its content on small screens
    width: auto;      // Set width to auto to adjust based on content
  }
`;
