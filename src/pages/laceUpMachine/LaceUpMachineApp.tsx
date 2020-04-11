import React from 'react'
import { useMachine } from '@xstate/react';

import LaceupBanner from '../../components/laceup/laceup-banner/laceup-banner'
import LaceUpMachine from '../../machines/laceupMachine';

const LaceUpMachineApp = () => {

  const [current, send] = useMachine(LaceUpMachine, { devTools: true });
  return (
    <>
      <LaceupBanner />
      <div>LaceUpMachineApp</div>
    </>
  )
  };

export default LaceUpMachineApp