import React from 'react';
import { StateNodesConfig, StateValue } from 'xstate';
import { MachineBlockProps } from '../types/MachineBlockProps';
import renderStateItems from '../util/renderStateItems';


const MachineBlock = ({ states, send, currentMatches }: MachineBlockProps) => (
  <div className="generic__row">
    {renderStateItems({ states, send, currentMatches })}
  </div>
);


export default MachineBlock;
