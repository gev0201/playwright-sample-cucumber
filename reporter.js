const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'reports/cucmber_report.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        'AppVersion': '1.0.0',
        'Test Env': 'Testing',
        Browser: 'Chrome 110',
        Platform: 'Windows'
    } 
}

reporter.generate(options)