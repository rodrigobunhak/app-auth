import styled from "styled-components";
import { ReactNode, InputHTMLAttributes } from "react";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input<{ hasIcon: boolean }>`
  font-family: 'Lexend';
  padding: 16px;
  padding-left: ${(props) => (props.hasIcon ? "48px" : "16px")};
  font-size: 14px;
  border: none;
  border-radius: 5px;
  width: 100%;
  background: #eeeeee;
`;

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

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export const InputText = ({ icon, ...props }: InputTextProps) => (
  <InputWrapper>
    {icon && <Icon>{icon}</Icon>}
    <StyledInput hasIcon={!!icon} {...props} />
  </InputWrapper>
);