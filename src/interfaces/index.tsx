import { Interpreter } from 'xstate';

export interface Race {
  ability: String
  title: String
  image: String
  ref: Interpreter<Race>,
  distance: {
    short: Number,
    long: String
  },
  incline: {
    score: Number,
    description: String
  },
  overall: {
    score: Number,
    description: String
  }
}