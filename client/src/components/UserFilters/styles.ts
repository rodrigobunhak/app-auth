import { styled } from "styled-components";

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  padding: 0.5rem 2rem;
  background-color: #f9f9f9;
  border-bottom: 2px solid #eee;
  gap: 8px;
`;

export const HeaderItem = styled.div`
  &:last-child {
    text-align: left;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #666;
  }
`;