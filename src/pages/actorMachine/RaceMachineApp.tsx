import React from 'react';
import { useService } from '@xstate/react';
import {Interpreter} from 'xstate';

import '../../App.css';

interface RaceMachineAppProps {
  key: Number,
  raceRef: Interpreter<any, any, any, any>
}



const RaceMachineApp = ({ raceRef }: RaceMachineAppProps) => {
  const [current, send] = useService(raceRef);
  const state = current.value

  const toggleSelect = () => {
    state === 'selected' && send('UNSELECTED')
    state === 'unselected' && send('SELECTED')
  }

  return (
    <div className={`${state === 'selected' && 'active'} machine__state-item__wrapper`}>
      {current.context.name}
      <div className="generic__button generic__button__submit">
            <button type="button" onClick={() => toggleSelect()}>Select</button>
        </div>
    </div>
  );
};

export default RaceMachineApp;
