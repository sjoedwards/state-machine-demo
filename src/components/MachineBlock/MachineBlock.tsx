import React from 'react';
import { StateNodesConfig, StateValue } from 'xstate';
import { MachineBlockProps } from '../types/MachineBlockProps';
import renderStateItems from '../util/renderStateItems';


const MachineBlock = ({ states, send, currentValue }: MachineBlockProps) => (
  <div className="generic__row">
    {renderStateItems({ states, send, currentValue })}
  </div>
);


export default MachineBlock;
