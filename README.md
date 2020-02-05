# Visual Regression Demo

## Introduction

Test application demonstrating how BackstopJS can be utilised in order to perform visual regression tests against an
example application.

BackstopJS was created and is maintained by (Garris Shipon)[https://github.com/garris]

## Getting the test app running

```
$ cd visual-regression-demo
$ npm
$ npm run start
```

Navigate to `http://localhost:3000` or `http://localhost:3000?async` for async version

## Backstop Setup

```
$ npm i backstopjs -g
```

## Run Backstop JS Scenarios

Complete the section `Getting the test app running`

Each scenario in the presentation can be run by directing backstop to the corresponding config file

All the below are run from `visual-regression-demo`

### Basic Example

Shows the minimal configuration required to run a visual-regression test using BackstopJS

`backstop test --config backstop/config/backstop--basic-example.js`

### Mobile First

Demonstrates the capturing of the test application rendered with multiple dimensions

`backstop test --config backstop/config/backstop--mobile-first.js`

### Async

Demonstrates how a delay can be used in order to wait for events to occur

`backstop test --config backstop/config/backstop--async.js`

### AsyncII

Demonstrates the weaknesses of delay, and how it can be mitigated using readySelector

`backstop test --config backstop/config/backstop--asyncII.js`

### AsyncIII

Demonstrates the weaknesses of delay, and how it can be mitigated using readyEvent

`backstop test --config backstop/config/backstop--asyncIII.js`

### Hover

Demonstrates how backstopJS can hover over an element prior to capturing a screenshot

`backstop test --config backstop/config/backstop--hover.js`

### Click

Demonstrates how backstopJS can click on an element prior to capturing a screenshot

`backstop test --config backstop/config/backstop--click.js`