const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'output.json',
  output: 'reports/cucumber/report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'Proyecto': 'Automation Allianz',
    'Entorno de Pruebas': 'Integración'
  }
};

reporter.generate(options);