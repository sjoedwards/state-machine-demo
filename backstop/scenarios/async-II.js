module.exports = [
  {
    "label": "BackstopJS Homepage Async II",
    "url": "http://localhost:3000?async",
    "misMatchThreshold" : 0.1,
    "selectors": ["body"]
  },
  {
    "label": "BackstopJS Homepage Async II Delay",
    "url": "http://localhost:3000?async",
    "misMatchThreshold" : 0.1,
    "selectors": ["body"],
  },
  {
    "label": "BackstopJS Homepage Async II Delay -- wait for selector",
    "url": "http://localhost:3000?async",
    "misMatchThreshold" : 0.1,
    "selectors": ["body"],
    "readySelector": ".laceup__race-tile__container",
  }
]