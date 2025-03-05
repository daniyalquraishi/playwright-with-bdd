const { Given, When, Then } = require('@cucumber/cucumber');
const commonLocators = require('../page-objects/common-locators');
const { LoginPage } = require('../page-objects/login-page');
const loginPage = new LoginPage();

Given('I am on the Demo QA HomePage', { timeout: 50 * 1000 }, async function () {
  await loginPage.navigateToLoginScreen();
});
