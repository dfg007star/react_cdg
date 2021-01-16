import React from "react";
import { Route, Switch } from "react-router-dom";

import styled from "styled-components";
import Main from "../pages/main";
import Issues from "../pages/issues";
import Filter from "../pages/filter";

const Base = styled.div``;

function App() {
  return (
    <Base>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/issues" component={Issues} />
        <Route path="/filter" component={Filter} />
      </Switch>
    </Base>
  );
}

export default App;
