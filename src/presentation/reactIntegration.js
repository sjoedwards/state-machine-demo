import { useMachine } from '@xstate/react';
import SimpleMachine from '../../machines/SimpleMachine';

const SimpleMachineApp = () => {
  const [current, send] = useMachine(SimpleMachine, { devTools: true });

  return (
    <main className="App">
      <div className="generic__row">
        { current.value === 'info_one' && (
            <InfoOne current={current} completeStep={send('INFO_SUBMIT_ONE')} />
        )}
      </div>
    </main>
  );
};

export default App;