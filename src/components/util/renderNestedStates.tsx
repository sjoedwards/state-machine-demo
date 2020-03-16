import { StateNodesConfig, StateNode, StateValue } from 'xstate';
import React from 'react';
import renderStateItems from './renderStateItems';
import { MachineBlockProps } from '../types/MachineBlockProps';


export default ({ states, send, currentMatches } : MachineBlockProps) => (
  renderStateItems({ states, send, currentMatches })
);
