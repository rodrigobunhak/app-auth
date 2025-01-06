import { styled } from "styled-components";

export const PaginationContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.active ? '#333' : '#eee'};
  background-color: ${props => props.active ? '#333' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${props => props.active ? '#444' : '#f5f5f5'};
  }
`;
