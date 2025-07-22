const { Given, When, Then } = require('@cucumber/cucumber');
const { commonLocatorsPage } = require('../page-objects/common-locators.js'); // Correct import
const locatorCommon = new commonLocatorsPage(); // Correct class name

Given(
  'I am on the Web Studio Apps Page',
  { timeout: 50 * 1000 },
  async function () {
    await locatorCommon.navigateToLoginScreen();
  },
);
