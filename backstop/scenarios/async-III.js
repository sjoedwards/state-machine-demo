module.exports = [
  {
    "label": "BackstopJS Homepage -- Async",
    "url": "http://localhost:3000?async",
    "misMatchThreshold" : 0.1,
    "selectors": ["body"]
  },
  {
    "label": "BackstopJS Homepage -- Async -- Delay",
    "url": "http://localhost:3000?async",
    "misMatchThreshold" : 0.1,
    "selectors": ["body"],
    "delay": 1000
  },
  {
    "label": "BackstopJS Homepage -- Async -- Wait for Event",
    "url": "http://localhost:3000?async",
    "misMatchThreshold" : 0.1,
    "selectors": ["body"],
    "readyEvent": "Content Loaded",
  }
]