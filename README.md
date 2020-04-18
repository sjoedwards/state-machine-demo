# State Machine Demo

## Introduction

A set of demo applications showcasing how State Machines can be used to create predictable front end journeys.

Using the [XState library](https://xstate.js.org/) created by [David Khourshid](https://github.com/davidkpiano).

## Running the demo suite

```
$ cd state-machine-demo
$ yarn i
$ yarn run dev
```

Visit http://localhost:3000 and access the relevant path for each demo

## Demo Applications

| Application         | URL                              |
|---------------------|----------------------------------|
| Simple machine      |http://localhost:3000/simple      |
| Invoking Promises   |http://localhost:3000/invoke      |
| Hierarchical Machine|http://localhost:3000/hierarchical|
| Guarded Transitions |http://localhost:3000/guarded     |
| Parallel Machine    |http://localhost:3000/parallel    |
| Actor Machine       |http://localhost:3000/actor       |
| Laceup Application  |http://localhost:3000/laceup      |

## Viewing the active state machine on each demo

1. Download and install the [XState dev tools Chrome extension](https://chrome.google.com/webstore/detail/xstate-devtools/aamnodipnlopbknpklfoabalmobheehc?hl=en)
2. Right click and click inspect
3. Click on the XState DevTools tab


## Accompanying slide deck

This demo was presented with an accomanying [slide deck](https://docs.google.com/presentation/d/1-g48oNOk9Bk4iinQNGGQ03LD88TZo0Vv5LxHf5QX-zM/edit?usp=sharing)
at [LeedsJS April 2020](https://leedsjs.com/).