import { styled } from "styled-components";

export const TextButton = styled.button`
  background: none;
  border: none;
  color: #9336B4;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
  font-size: 14px;

  &:hover {
    color: rgb(123, 41, 153);
  }
`;