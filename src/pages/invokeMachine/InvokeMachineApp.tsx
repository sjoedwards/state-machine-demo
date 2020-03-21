import React, { useState } from 'react';
import { useMachine } from '@xstate/react';
import InvokeMachine from '../../machines/InvokeMachine';


import MachineBlock from '../../components/MachineBlock/MachineBlock';
import '../../App.css';

const InvokeMachineApp = () => {
  const [current, send] = useMachine(InvokeMachine, { devTools: true });
  const [error, setError] = useState(false);

  const shouldRenderSend = current.value !== 'two';
  console.log(current)

  return (
    <main className="App">

      <div className="generic__row">
        <div className={`generic__button ${ !error ? 'generic__button--success' : 'generic__button--error'}`}>
          <button onClick={() => setError(!error)}  >{!error ? 'Success' : 'Error'}</button>
        </div>
      </div>
        <div className="generic__row">
            <MachineBlock shouldRenderSend={shouldRenderSend} current={current} send={((event: any) => send({ type: event, payload: error }))} />
        </div>
    </main>
  );
};

export default InvokeMachineApp;
