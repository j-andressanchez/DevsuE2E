const { Builder } = require('selenium-webdriver');

let driver;

const getDriver = () => {
    if (!driver) {
        driver = new Builder().forBrowser('MicrosoftEdge').build();
    }
    return driver;
};

module.exports = { getDriver };