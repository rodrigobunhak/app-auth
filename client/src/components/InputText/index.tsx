// import { styled } from "styled-components";

// export const InputText = styled.input`
//   padding: 16px;
//   font-size: 16px;
//   border: none;
//   border-radius: 5px;
//   background: #EEEEEE;
// `;

import styled from "styled-components";
import { ReactNode, InputHTMLAttributes } from "react";

// Wrapper para o input e o ícone
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  /* border: 1px solid red; */
`;

// Estilização do input
const StyledInput = styled.input<{ hasIcon: boolean }>`
  font-family: 'Lexend';
  padding: 16px;
  padding-left: ${(props) => (props.hasIcon ? "48px" : "16px")}; /* Ajusta o padding se houver ícone */
  font-size: 14px;
  border: none;
  border-radius: 5px;
  width: 100%;
  background: #eeeeee;
`;

// Estilização do ícone
const Icon = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 12px;

  img {
    width: 24px;
    height: 24px;
    opacity: 0.4;
  }
`;

// Tipagem das props do componente
interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode; // Ícone opcional
}

export const InputText = ({ icon, ...props }: InputTextProps) => (
  <InputWrapper>
    {icon && <Icon>{icon}</Icon>}
    <StyledInput hasIcon={!!icon} {...props} />
  </InputWrapper>
);