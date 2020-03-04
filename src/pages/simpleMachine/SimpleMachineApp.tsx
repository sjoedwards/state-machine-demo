import React from 'react'
import MachineBlock from '../../components/MachineBlock/MachineBlock'
import '../../App.css'

const states = [
  {name: '1', initial: true },
  {name: '2'},
  {name: '3'},
  {name: '4', final: true},
]

const SimpleMachine = () => (
  <main className='App'>
    <div className="generic__row">
      <MachineBlock states={states} />
    </div>
  </main>
);

export default SimpleMachine