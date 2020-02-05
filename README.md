# Visual Regression Demo

## Local setup

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

Each scenario in the presentation can be run by directing backstop to the corresponding config file

All the below are run from `visual-regression-demo`

### Basic Example

backstop test --config backstop/config/backstop--basic-example.js

### Mobile First
backstop test --config backstop/config/backstop--mobile-first.js

### Async
backstop test --config backstop/config/backstop--async.js

### AsyncII
backstop test --config backstop/config/backstop--asyncII.js

### AsyncIII
backstop test --config backstop/config/backstop--asyncIII.js

### Hover
backstop test --config backstop/config/backstop--hover.js

### Click
backstop test --config backstop/config/backstop--click.js