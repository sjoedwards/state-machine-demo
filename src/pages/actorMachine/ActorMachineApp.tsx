import React, { useState } from 'react';
import { useMachine } from '@xstate/react';
import RaceMachineApp from './RaceMachineApp';

import MachineBlock from '../../components/MachineBlock/MachineBlock';
import '../../App.css';

import ActorMachine from '../../machines/actorMachine';

const ActorMachineApp = () => {
  const [current, send] = useMachine(ActorMachine, { devTools: true });

  return (
    <main className="App">
      <div className="generic__row">
        <div className="machine__state-item__wrapper">
        <div className="generic__row">
          <ul>Selected Races
          {current.context.selectedRaces.map((race: any) => (
            <li key={race.id}>{race.name}</li>
          ))}
          </ul>
        </div>
        <div className="generic__row">
            {current.context.races.map((race: any) => (
              <RaceMachineApp key={race.id} raceRef={race.ref} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ActorMachineApp;
