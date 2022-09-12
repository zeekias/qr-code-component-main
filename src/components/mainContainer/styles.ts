import React, { ReducerAction } from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(212, 45%, 89%);
`;

export const LineBalls = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #6abdd3;
  margin-top: 20px;
`;
