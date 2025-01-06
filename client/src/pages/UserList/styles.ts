import { styled } from "styled-components";

export const UserList = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
`;

export const UserItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s;
  gap: 8px;

  &:hover {
    background-color: #f9f9f9;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const UserData = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  
  &:last-child {
    text-align: left;
  }
`;