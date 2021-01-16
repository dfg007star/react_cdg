import React from "react";

import icon from "./icon.png";
import styled from "styled-components";

const Error = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  & img {
    margin-bottom: 1rem;
  }
  &.boom {
    font-size: 1.7rem;
  }
`;

const ErrorIndicator = () => {
  return (
    <Error>
      <img src={icon} alt="error icon" />
      <span className="boom">OMG!</span>
      <span>you make such bad application</span>
      <span>(dima, please fix it!)</span>
    </Error>
  );
};

export default ErrorIndicator;
