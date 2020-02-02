report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../reference/laceup_default_BackstopJS_Homepage_--_Async_0_body_0_default.png",
        "test": "../../results/20200202-150209/laceup_default_BackstopJS_Homepage_--_Async_0_body_0_default.png",
        "selector": "body",
        "fileName": "laceup_default_BackstopJS_Homepage_--_Async_0_body_0_default.png",
        "label": "BackstopJS Homepage -- Async",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000?async",
        "expect": 0,
        "viewportLabel": "default",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "26.11",
          "analysisTime": 60
        },
        "diffImage": "../../results/20200202-150209/failed_diff_laceup_default_BackstopJS_Homepage_--_Async_0_body_0_default.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../reference/laceup_default_BackstopJS_Homepage_--_Async_--_Delay_0_body_0_default.png",
        "test": "../../results/20200202-150209/laceup_default_BackstopJS_Homepage_--_Async_--_Delay_0_body_0_default.png",
        "selector": "body",
        "fileName": "laceup_default_BackstopJS_Homepage_--_Async_--_Delay_0_body_0_default.png",
        "label": "BackstopJS Homepage -- Async -- Delay",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000?async",
        "expect": 0,
        "viewportLabel": "default",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "26.11",
          "analysisTime": 61
        },
        "diffImage": "../../results/20200202-150209/failed_diff_laceup_default_BackstopJS_Homepage_--_Async_--_Delay_0_body_0_default.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../reference/laceup_default_BackstopJS_Homepage_--_Async_--_Wait_for_Event_0_body_0_default.png",
        "test": "../../results/20200202-150209/laceup_default_BackstopJS_Homepage_--_Async_--_Wait_for_Event_0_body_0_default.png",
        "selector": "body",
        "fileName": "laceup_default_BackstopJS_Homepage_--_Async_--_Wait_for_Event_0_body_0_default.png",
        "label": "BackstopJS Homepage -- Async -- Wait for Event",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000?async",
        "expect": 0,
        "viewportLabel": "default",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "laceup_default"
});