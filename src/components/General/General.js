import React from "react";
import styled from "styled-components";
import GeneralHead from "./GeneralHead"

const GeneralBase = styled.div `
  width: 70%;
  height: 100px;
  border-right: 1px solid #e9ecf2;
  padding-right: 5%;
`
function General() {
  return (
      <GeneralBase>
        <GeneralHead>
          
        </GeneralHead>
      </GeneralBase>
    );
  }

export default General;