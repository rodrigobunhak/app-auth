import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 15px;
`;

export const Title = styled.h1`
  margin: 0;
`

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -8px;
`;

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`