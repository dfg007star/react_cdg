import React from "react";

import styled from "styled-components";
import { Container, Wrapper } from "../../styled/styled.js";
import WorklogList from "../worklog-list";
import Aside from "../aside";

const MainBase = styled.main`
  margin-top: 52px;
`;

function Main() {
  return (
    <MainBase>
      <Container>
        <Wrapper>
          <WorklogList />
          <Aside />
        </Wrapper>
      </Container>
    </MainBase>
  );
}

export default Main;
