import React, { useState } from 'react';
import { useMachine } from '@xstate/react';
import GuardedMachine from '../../machines/guardedMachine';


import MachineBlock from '../../components/MachineBlock/MachineBlock';
import '../../App.css';

const GuardedMachineApp = () => {
  const [current, send] = useMachine(GuardedMachine, { devTools: true });
  const [canSkipTwo, setCanSkipTwo] = useState(false);


  return (
    <main className="App">

      <div className="generic__row">
        <div className={`generic__button ${ canSkipTwo ? 'generic__button--success' : 'generic__button--error'}`}>
          <button onClick={() => setCanSkipTwo(!canSkipTwo)}>Can Skip Two</button>
        </div>
      </div>
        <div className="generic__row">
            <MachineBlock current={current} send={((event: any) => send(event, {canSkipTwo: canSkipTwo}))} />
        </div>
    </main>
  );
};

export default GuardedMachineApp;
