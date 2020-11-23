import React from "react";
import styled from "styled-components";
import { Container, Wrapper } from "../../styled/styled";

const MainBase = styled.main `
    margin-top: 52px;
`

function Main () {
    return (
        <MainBase>
            <Container>
                <Wrapper>
<div>BASE</div>
                </Wrapper>
            </Container>
        </MainBase>
    )
}

export default Main;