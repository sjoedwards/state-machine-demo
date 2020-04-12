import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {SimpleMachineApp, InvokeMachineApp, HierarchicalMachineApp, ParallelMachineApp, LaceUpMachineApp, GuardedMachineApp, ActorMachineApp} from '../../pages'

const Router = () => (
<BrowserRouter>
    <Switch>
      <Route path="/simple">
        <SimpleMachineApp />
      </Route>
      <Route path="/invoke">
        <InvokeMachineApp />
      </Route>
      <Route path="/hierarchical">
        <HierarchicalMachineApp />
      </Route>
      <Route path="/guarded">
        <GuardedMachineApp />
      </Route>
      <Route path="/parallel">
        <ParallelMachineApp />
      </Route>
      <Route path="/actor">
        <ActorMachineApp />
      </Route>
      <Route path="/laceup">
        <LaceUpMachineApp />
      </Route>
      <Redirect to="/simple" />
    </Switch>
  </BrowserRouter>
)

export default Router;
