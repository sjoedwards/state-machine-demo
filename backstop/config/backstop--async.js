const Scenarios = require('../scenarios/async');

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
    html_report: 'backstop/html_report/async',
    ci_report: 'backstop/ci_report'
  },
  report: ['browser'],
  engine: 'puppeteer'
};
