const Scenarios = require('../scenarios/basic-example');

module.exports = {
  id: 'laceup_default',
  viewports: [
    {
      label: 'default',
      width: 1920,
      height: 1080
    }
  ],

  scenarios: [...Scenarios],
  paths: {
    bitmaps_reference: 'backstop/reference',
    bitmaps_test: 'backstop/results',
    engine_scripts: 'backstop/engine_scripts',
    html_report: 'backstop/html_report/basic-example',
    ci_report: 'backstop/ci_report'
  },
  report: ['browser'],
  engine: 'puppeteer'
};

// {
//   "label": "BackstopJS Homepage",
//   "cookiePath": "backstop_data/engine_scripts/cookies.json",
//   "url": "http",
//   "referenceUrl": "",
//   "readyEvent": "",
//   "readySelector": "",
//   "delay": 0,
//   "hideSelectors": [],
//   "removeSelectors": [],
//   "hoverSelector": "",
//   "clickSelector": "",
//   "postInteractionWait": 0,
//   "selectors": [],
//   "selectorExpansion": true,
//   "expect": 0,
//   "misMatchThreshold" : 0.1,
//   "requireSameDimensions": true
// }
