import styled from "styled-components";

export const QrcodeContainer = styled.div`
  width: 320px;
  height: 500px;
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 15px;
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 15px;
  }
`;

export const TextContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  text-align: center;
  h1 {
    font-size: 22px;
    color: hsl(218, 44%, 22%);
  }
  p {
    font-size: 15px;
    color: hsl(220, 15%, 55%);
  }
`;
