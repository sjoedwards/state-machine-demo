import React, { useState } from 'react';
import { useMachine } from '@xstate/react';
import HierarchicalMachine from '../../machines/hierarchicalMachine';
import MachineBlock from '../../components/MachineBlock/MachineBlock';
import '../../App.css';

const HierarchicalMachineApp = () => {
  const [current, send] = useMachine(HierarchicalMachine, { devTools: true });

  return (
    <main className="App">
      <div className="generic__row">
        <MachineBlock current={current} send={((event: any) => send(event))} />
      </div>
    </main>
  );
};

export default HierarchicalMachineApp;
