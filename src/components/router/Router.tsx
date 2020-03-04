import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {SimpleMachine, NestedMachine, ParallelMachine, LaceUpMachine} from '../../pages'

const Router = () => (
<BrowserRouter>
    <Switch>
      <Route path="/simple">
        <SimpleMachine />
      </Route>
      <Route path="/nested">
        <NestedMachine />
      </Route>
      <Route path="/parallel">
        <ParallelMachine />
      </Route>
      <Route path="/laceup">
        <LaceUpMachine />
      </Route>
      <Redirect to="/simple" />
    </Switch>
  </BrowserRouter>
)

export default Router;
