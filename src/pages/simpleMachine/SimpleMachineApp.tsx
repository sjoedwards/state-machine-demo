import React, { useState } from 'react';
import { useMachine } from '@xstate/react';
import SimpleMachine from '../../machines/SimpleMachine';


import MachineBlock from '../../components/MachineBlock/MachineBlock';
import '../../App.css';

const SimpleMachineApp = () => {
  const [current, send] = useMachine(SimpleMachine, { devTools: true });
  const [machineStates] = useState(current.configuration[0].states);

  return (
    <main className="App">
      <div className="generic__row">
        <MachineBlock currentMatches={current.matches} states={machineStates} send={((event: any) => send(event))} />
      </div>
    </main>
  );
};

export default SimpleMachineApp;
