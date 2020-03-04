import React from 'react'

interface MachineBlockState  {
  name: String,
  initial?: Boolean,
  final?: Boolean
}

interface MachineBlockProps {
  states: Array<MachineBlockState>
}

const renderStateItems = (states: Array<MachineBlockState>) => {
  return states.map(({name, initial=false, final=false}, index) => {
    return (
      <div key={index}>
        <div className="machine__state-item__wrapper">
          <div className="machine__state-item__content-row">{name}</div>
          {initial && <div className="machine__state-item__content-row">Initial</div>}
          {final && <div className="machine__state-item__content-row">Final</div>}
        </div>
      </div>
    );
  })
}

const MachineBlock = (props: MachineBlockProps) => (
  <div className="generic__row">
    {renderStateItems(props.states)}
  </div>
)


export default MachineBlock