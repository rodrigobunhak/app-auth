import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InfoSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  text-align: center;
  background: linear-gradient(to bottom, #FBF0FF 0%, #F3F7FF 40%, #F2FBFF 60%, #FFF3FE 100%);
  
  h1 {
    font-size: 160px;
    margin: 0;

    span {
      color: #9336B4;
    }
  }

  p {
    font-size: 22px;
    margin: 0;
    max-width: 400px;
    max-width: 800px;

    span {
      color: #9336B4;
      font-weight: 600;
    }
  }
`;

export const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
`;