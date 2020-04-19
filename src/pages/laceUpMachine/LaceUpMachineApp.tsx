import React, {useEffect} from 'react'
import { useMachine } from '@xstate/react';
import { State } from 'xstate'

import LaceupBanner from '../../components/laceup/laceup-banner/laceup-banner'
import LaceUpMachine from '../../machines/laceupMachine';
import Info from '../../components/laceup/laceup-info/laceup-info'
import Loading from '../../components/laceup/laceup-loader/laceup-loader';
import Error from '../../components/laceup/laceup-error/laceup-error';
import TrainingInfo from '../../components/laceup/laceup-training-info/laceup-training-info';
import RaceAbility from '../../components/laceup/laceup-race-ability/laceup-race-abilty'
import Races from '../../components/laceup/laceup-races/laceup-races'

interface WizardRouterProps {
  current: State<any, any, any, any>,
  send: Function
}

const routes = {
  infoOne: ({send}: WizardRouterProps) => <Info id={1} body="Welcome to the laceup race wizard" send={send} />,
  infoTwo: ({send}: WizardRouterProps) => <Info id={2} body="This wizard will help you find races for your ability" send={send} />,
  infoThree: ({send}: WizardRouterProps) => <Info id={3} body="For best results, answer the questions honestly! Are you ready?" send={send} />,
  loadingWizard: () => <Loading />,
  trainingInfo: ({send, current}: WizardRouterProps) => <TrainingInfo current={current} send={send} />,
  errorGettingData: ({send}: WizardRouterProps) => <Error body="Error getting data, please retry the wizard" send={send} />,
  errorUnknown: ({send}: WizardRouterProps) => <Error body="Unknown Error, please retry the wizard" send={send} />,
  calculatingRaceAbility: () => <Loading />,
  raceAbility: ({send, current}: WizardRouterProps) => <RaceAbility current={current} send={send} />,
  loadingRaces: () => <Loading />,
  races: ({send, current}: WizardRouterProps) => <Races current={current} send={send} />
}

const WizardRouter = ({ current, send }: WizardRouterProps) => {
  let route: Function = routes['errorUnknown']
  Object.entries(routes).forEach(([key, value])=> {
    if (current.matches(key)) {
      route = value
    }
  })
  return route({current, send}) || null
}

const LaceUpMachineApp = () => {
  const localState = localStorage.getItem('machine');
  const persistedState = localState && JSON.parse(localState);
  const [current, send] = useMachine(LaceUpMachine, { devTools: true, state: persistedState});

  useEffect(() => {
    if (!current.matches('races')) {
      const json = JSON.stringify(current)
      localStorage.setItem('machine', json)
    }
  },[current])

  return (
    <>
      <LaceupBanner />
      <div className="generic__row util__padding-top--medium util__mobile-remove-padding">
        <WizardRouter current={current} send={send} />
      </div>
    </>
  )
};

export default LaceUpMachineApp