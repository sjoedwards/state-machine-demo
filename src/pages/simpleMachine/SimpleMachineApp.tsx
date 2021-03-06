import React from 'react';
import { useMachine } from '@xstate/react';

import MachineBlock from '../../components/MachineBlock/MachineBlock';
import '../../App.css';

import SimpleMachine from '../../machines/SimpleMachine';


const SimpleMachineApp = () => {
  const [current, send] = useMachine(SimpleMachine, { devTools: true });

  return (
    <main className="App">
      <div className="generic__row">
        <MachineBlock current={current} send={((event: any) => send(event))} />
      </div>
    </main>
  );
};

export default SimpleMachineApp;
