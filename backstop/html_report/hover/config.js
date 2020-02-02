report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../reference/laceup_default_BackstopJS_Homepage_0_body_0_default.png",
        "test": "../../results/20200202-182329/laceup_default_BackstopJS_Homepage_0_body_0_default.png",
        "selector": "body",
        "fileName": "laceup_default_BackstopJS_Homepage_0_body_0_default.png",
        "label": "BackstopJS Homepage",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
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
    },
    {
      "pair": {
        "reference": "../../reference/laceup_default_BackstopJS_Homepage_--_Hover_0_body_0_default.png",
        "test": "../../results/20200202-182329/laceup_default_BackstopJS_Homepage_--_Hover_0_body_0_default.png",
        "selector": "body",
        "fileName": "laceup_default_BackstopJS_Homepage_--_Hover_0_body_0_default.png",
        "label": "BackstopJS Homepage -- Hover",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "expect": 0,
        "viewportLabel": "default",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.84",
          "analysisTime": 59
        },
        "diffImage": "../../results/20200202-182329/failed_diff_laceup_default_BackstopJS_Homepage_--_Hover_0_body_0_default.png"
      },
      "status": "fail"
    }
  ],
  "id": "laceup_default"
});