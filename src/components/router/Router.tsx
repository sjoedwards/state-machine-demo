import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {SimpleMachine, NestedMachine, ParallelMachineApp, LaceUpMachineApp} from '../../pages'

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
        <ParallelMachineApp />
      </Route>
      <Route path="/laceup">
        <LaceUpMachineApp />
      </Route>
      <Redirect to="/simple" />
    </Switch>
  </BrowserRouter>
)

export default Router;
