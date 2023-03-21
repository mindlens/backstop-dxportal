//backstop test --config=config.js
//backstop reference --config=config.js
// const connectionUrl = "http://localhost:8080/#/";
const connectionUrl = "https://dxportal.tsp.sg/#/";
const referenceUrl = "https://dxplus.mom.gov.sg/#/";
// const referenceUrl = "https://dxplus.mom.gov.sg/#/";
const errorThreshold = 1;

const pages = [
  // "About",
  // // These Pages will be added manually at the bottom for special scripting
  // "GettingStarted",
  // "GettingStarted/UsingCdpl",
  // "GettingStarted/UsingLibrary",
  // "Playbook",
  // "Playbook/Plan",
  // "Playbook/Discover",
  // "Playbook/Discover/StakeholderInterviews",
  // "Playbook/Discover/Survey",
  // "Playbook/Discover/FocusGroup",
  // "Playbook/Define",
  // "Playbook/Define/Personas",
  // "Playbook/Define/UserScenarios",
  // "Playbook/Define/JourneyMap",
  // "Playbook/Ideate",
  // "Playbook/Ideate/HowMightWeStatements",
  // "Playbook/Ideate/CardSorting",
  // "Playbook/Ideate/DesignAndPrototype",
  // "Playbook/Validate",
  // "Playbook/Validate/UXSelfAudit",
  // "Playbook/Validate/UsabilityTesting",
  // "Playbook/Implement",
  // "Playbook/Measure",
  // "Tools",
  // "Community",
  // "UxResources",
  // "UxResources/Discover",
  // "UxResources/Define",
  // "UxResources/Ideate",
  // "UxResources/Validate",
  // "UxResources/Implement",
  // "UxResources/Measure",
  // "Faq",
  // "Contact",
  // "Release",
];

const config = {
  id: "MomDX",
  viewports: [
    {
      label: "mobile",
      width: 480,
      height: 640,
    },
    {
      label: "desktop",
      width: 1280,
      height: 1024,
    },
  ],
  onBeforeScript: "puppet/onBefore.js",
  onReadyScript: "puppet/onReady.js",
  scenarios: [
    {
      label: "Index",
      url: connectionUrl,
      referenceUrl: referenceUrl,
      selectors: ["#app"],
      delay: 1000,
      misMatchThreshold: errorThreshold,
    },
  ],
  paths: {
    bitmaps_reference: "test/backstop/backstop_data/bitmaps_reference",
    bitmaps_test: "test/backstop/backstop_data/bitmaps_test",
    engine_scripts: "test/backstop/backstop_data/engine_scripts",
    html_report: "test/backstop/backstop_data/html_report",
    ci_report: "test/backstop/backstop_data/ci_report",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 1,
  asyncCompareLimit: 1,
  debug: false,
  debugWindow: false,
  captureBeyondViewport: false,
};

for (const page of pages) {
  config.scenarios.push({
    label: page,
    url: connectionUrl + `${page}`,
    referenceUrl: referenceUrl + `${page}`,
    selectors: ["#app"],
    delay: 1000,
    misMatchThreshold: errorThreshold,
  });
}

// Components and template pages have different selectors

config.scenarios.push({
  label: "Components Page",
  url: "https://dxportal.tsp.sg/components/index.html",
  referenceUrl: "https://dxportal.tsp.sg/components/index.html",
  selectors: ["#rsg-root"],
  delay: 1000,
  misMatchThreshold: errorThreshold,
});

config.scenarios.push({
  label: "Templates Page",
  url: "https://dxportal.tsp.sg/templates/index.html",
  referenceUrl: "https://dxportal.tsp.sg/templates/index.html",
  selectors: ["#rsg-root"],
  delay: 1000,
  misMatchThreshold: errorThreshold,
});

// Getting Started page
// config.scenarios.push({
//   label: "Getting Started[1]",
//   url: connectionUrl + `GettingStarted`,
//   referenceUrl: referenceUrl + `GettingStarted`,
//   selectors: ["#app"],
//   delay: 1000,
//   misMatchThreshold: errorThreshold
// });

// for(let i = 2; i < 5; i++) {
//   config.scenarios.push({
//     label: `Getting Started[${i}]`,
//     url: connectionUrl + `GettingStarted`,
//     referenceUrl: referenceUrl + `GettingStarted`,
//     clickSelector: `section:nth-of-type(${i}) button`,
//     selectors: ["#app"],
//     delay: 5000,
//     misMatchThreshold: errorThreshold
//   });
// }

// Getting Started/UsingCdpl
// config.scenarios.push({
//   label: "Getting Started(CDPL)[1]",
//   url: connectionUrl + `GettingStarted/UsingCdpl`,
//   referenceUrl: referenceUrl + `GettingStarted/UsingCdpl`,
//   selectors: ["#app"],
//   delay: 1000,
//   misMatchThreshold: errorThreshold
// });

// for(let i = 2; i < 4; i++) {
//   config.scenarios.push({
//     label: `Getting Started(CDPL)[${i}]`,
//     url: connectionUrl + `GettingStarted/UsingCdpl`,
//     referenceUrl: referenceUrl + `GettingStarted/UsingCdpl`,
//     clickSelector: `section:nth-of-type(${i}) button`,
//     selectors: ["#app"],
//     delay: 5000,
//     misMatchThreshold: errorThreshold
//   });
// }

// Getting Started/UsingLibrary
// config.scenarios.push({
//   label: "Getting Started(UsingLibrary)[1]",
//   url: connectionUrl + `GettingStarted/UsingLibrary`,
//   referenceUrl: referenceUrl + `GettingStarted/UsingLibrary`,
//   selectors: ["#app"],
//   delay: 1000,
//   misMatchThreshold: errorThreshold
// });

// for(let i = 2; i < 5; i++) {
//   config.scenarios.push({
//     label: `Getting Started(UsingLibrary)[${i}]`,
//     url: connectionUrl + `GettingStarted/UsingLibrary`,
//     referenceUrl: referenceUrl + `GettingStarted/UsingLibrary`,
//     clickSelector: `section:nth-of-type(${i}) button`,
//     selectors: ["#app"],
//     delay: 5000,
//     misMatchThreshold: errorThreshold
//   });
// }

// Faq
// config.scenarios.push({
//   label: "Faq",
//   url: connectionUrl + `Faq`,
//   referenceUrl: referenceUrl + `Faq`,
//   selectors: ["#app"],
//   delay: 1000,
//   misMatchThreshold: errorThreshold
// });

// for(let i = 2; i < 8; i++) {
//   config.scenarios.push({
//     label: `Faq[${i}]`,
//     url: connectionUrl + `Faq`,
//     referenceUrl: referenceUrl + `Faq`,
//     clickSelector: `section:nth-of-type(${i}) button`,
//     selectors: ["#app"],
//     delay: 5000,
//     misMatchThreshold: errorThreshold
//   });
// }

// Links in components and templates
// const baseURL = "https://dxportal.tsp.sg";
// const baseRefURL = "https://dxplus.mom.gov.sg";
const baseURL = connectionUrl.split("/#/")[0];
const baseRefURL = referenceUrl.split("/#/")[0];

const links = require("./componentLinks.json");

for (const link of links.components) {
  let name = link.split("/");
  config.scenarios.push({
    label: name[name.length - 1],
    url: baseURL + link,
    referenceUrl: baseRefURL + link,
    selectors: ["#rsg-root"],
    delay: 1000,
    misMatchThreshold: errorThreshold,
  });
}

for (const link of links.templates) {
  let name = link.split("/");
  config.scenarios.push({
    label: name[name.length - 1],
    url: baseURL + "/templates/index.html" + link,
    referenceUrl: baseRefURL + "/templates/index.html" + link,
    selectors: ["#rsg-root"],
    delay: 1000,
    misMatchThreshold: errorThreshold,
  });
}

module.exports = config;
