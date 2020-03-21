import React, { useState } from 'react';
import { useMachine } from '@xstate/react';
import NestedMachine from '../../machines/SimpleMachine';
import MachineBlock from '../../components/MachineBlock/MachineBlock';
import '../../App.css';

const NestedMachineApp = () => {
  const [current, send] = useMachine(NestedMachine, { devTools: true });
  const [machineStates] = useState(current.configuration[0].states);

  return (
    <main className="App">
      <div className="generic__row">
        <MachineBlock current={current} send={((event: any) => send(event))} />
      </div>
    </main>
  );
};

export default NestedMachineApp;
