import React from 'react'
import { useMachine } from '@xstate/react';
import { State } from 'xstate'

import LaceupBanner from '../../components/laceup/laceup-banner/laceup-banner'
import LaceUpMachine from '../../machines/laceupMachine';
import Info from '../../components/laceup/laceup-info/laceup-info'
import Loader from '../../components/laceup/laceup-loader/laceup-loader';
import TrainingInfo from '../../components/laceup/laceup-training-info/laceup-training-info';
interface WizardRouterProps {
  current: State<any, any, any, any>,
  send: Function
}

const extractCurrent = (value: State<any, any, any, any>) => {

}

const routes = {
  infoOne: ({send}: WizardRouterProps) => <Info id={1} body="Welcome to the laceup race wizard" send={send} />,
  infoTwo: ({send}: WizardRouterProps) => <Info id={2} body="This wizard will help you find races for your ability" send={send} />,
  infoThree: ({send}: WizardRouterProps) => <Info id={3} body="For best results, answer the questions honestly! Are you ready?" send={send} />,
  trainingInfo: ({send, current}: WizardRouterProps) => <TrainingInfo current={current} send={send} />
}

const WizardRouter = ({ current, send }: WizardRouterProps) => {
  let route: Function = Loader;
  Object.entries(routes).forEach(([key, value])=> {
    if (current.matches(key)) {
      route = value
    }
  })
  return route({current, send}) || null
}

const LaceUpMachineApp = () => {
  const [current, send] = useMachine(LaceUpMachine, { devTools: true });
  const state = current.value
  return (
    <>
      <LaceupBanner />
      <div className="generic__row">
        <WizardRouter current={current} send={send} />
      </div>
    </>
  )
};

export default LaceUpMachineApp