import React from "react";
import styled from "styled-components";
import { Container, Wrapper } from "../../styled/styled";
import HeaderNav from "./HeaderNav"
import HeaderProfile from "./HeaderProfile"

const HeaderBase = styled.header `
  width: 100%;
  height: 91px;
  background-color: #3744bd;
`

function Header() {
    return ( 
    <HeaderBase>
        <Container>
            <Wrapper>
                <HeaderNav />  
                <HeaderProfile />
            </Wrapper>
        </Container>
    </HeaderBase>
    );
}

export default Header;