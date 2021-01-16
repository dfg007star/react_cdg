import React from "react";
import styled from "styled-components";
import { Container, Wrapper } from "../../styled/styled";

const FilterBase = styled.main`
  margin-top: 52px;
`;

function Filter() {
  return (
    <FilterBase>
      <Container>
        <Wrapper>
          <h3>Filter!</h3>
        </Wrapper>
      </Container>
    </FilterBase>
  );
}

export default Filter;
