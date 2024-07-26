const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'output.json',
  output: 'reports/cucumber/report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'Proyecto': 'selenium JS'
  }
};

reporter.generate(options);