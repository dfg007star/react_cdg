import React from "react";
import styled from "styled-components";

const HeaderNavMenu = styled.ul `
  width: 50%;
  height: 91px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const HeaderItemMenu = styled.li `
  margin-right: 73px;
  display: inline-block;
  text-align: center;
`

const HeaderItemLink = styled.a `
  padding-bottom: 33px;
  border-bottom: 2px solid #3744bd;
  border-radius: 1px;
  text-decoration: none;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 144.2%;
  color: #fff;
  &:hover {
    border-bottom: 2px solid #fff;
  }
`

function HeaderNav () {
return (
    <HeaderNavMenu>
        <HeaderItemMenu>
            <HeaderItemLink>Home</HeaderItemLink>
        </HeaderItemMenu>
        <HeaderItemMenu>
            <HeaderItemLink>Issues</HeaderItemLink>
        </HeaderItemMenu>
        <HeaderItemMenu>
            <HeaderItemLink>Filter</HeaderItemLink>
        </HeaderItemMenu>
        <HeaderItemMenu>
            <HeaderItemLink>Projects</HeaderItemLink>
        </HeaderItemMenu>
    </HeaderNavMenu>
    )   
}

export default HeaderNav;