import React from "react";
import styled from "styled-components";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Issues from "./components/Issues/Issues"
import Filter from "./components/Filter/Filter"


const Base = styled.div ``;

function App() {
  return (
    <BrowserRouter>
    <Base>
    <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/issues" component={Issues} />
        <Route path="/filter" component={Filter} />
        <Route path="/projects" component={Issues} />
      </Switch>
    </Base>
    </BrowserRouter>
  );
}

export default App;
