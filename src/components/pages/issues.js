import React from "react";
import styled from "styled-components";
import { Container, Wrapper } from "../../styled/styled";

const IssuesBase = styled.main `
    margin-top: 52px;
`

function Issues () {
    return (
        <IssuesBase>
            <Container>
                <Wrapper>
                    <h3>Issues!</h3>
                </Wrapper>
            </Container>
        </IssuesBase>
    )
}

export default Issues;