import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const Base = styled.div ``;

function App() {
  return (
    <Base>
    <Header />
    <Main />
    </Base>
  );
}

export default App;
