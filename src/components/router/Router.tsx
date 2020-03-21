import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {SimpleMachineApp, InvokeMachineApp, NestedMachineApp, ParallelMachineApp, LaceUpMachineApp} from '../../pages'

const Router = () => (
<BrowserRouter>
    <Switch>
      <Route path="/simple">
        <SimpleMachineApp />
      </Route>
      <Route path="/invoke">
        <InvokeMachineApp />
      </Route>
      <Route path="/nested">
        <NestedMachineApp />
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
