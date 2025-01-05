import { styled } from "styled-components";

export const Button = styled.button<{ size?: "regular" | "small" }>`
  font-size: ${({ size }) => (size === "small" ? "12px" : "14px")};
  font-weight: 600;
  background-color: #9336b4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: ${({ size }) => (size === "small" ? "5px 10px" : "16px")};

  &:hover {
    background-color: rgb(123, 41, 153);
  }
`;