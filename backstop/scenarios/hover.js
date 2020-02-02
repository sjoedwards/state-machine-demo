module.exports = [
  {
    "label": "BackstopJS Homepage",
    "url": "http://localhost:3000",
    "misMatchThreshold" : 0.1,
    "selectors": ["body"]
  },
  {
    "label": "BackstopJS Homepage -- Hover",
    "url": "http://localhost:3000",
    "misMatchThreshold" : 0.1,
    "selectors": ["body"],
    "hoverSelector": "#race-tile__0",
    "postInteractionWait": 2000,
  }
]