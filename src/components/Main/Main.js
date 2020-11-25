import React from "react";
import styled from "styled-components";
import General from "../General/General"
import Aside from "../Aside/Aside"
import { Container, Wrapper } from "../../styled/styled";

const MainBase = styled.main `
    margin-top: 52px;
`

function Main () {
    return (
        <MainBase>
            <Container>
                <Wrapper>
                     <General />
                     <Aside />
                </Wrapper>
            </Container>
        </MainBase>
    )
}

export default Main;