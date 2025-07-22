const { Given, When, Then } = require('@cucumber/cucumber');
const { creatinglyLocators } = require('../page-objects/creatingly-locators');

const locatorCreatingly = new creatinglyLocators();

When('I click on Art Board', { timeout: 50 * 1000 }, async function () {
  await locatorCreatingly.clickArtBoard();
});

When(
  'I pick the container and drop it to the artboard',
  { timeout: 50 * 1000 },
  async function () {
    await locatorCreatingly.dragAndDropArtBoard();
  },
);

When(
  'I dropped a chart inside stack container',
  { timeout: 50 * 1000 },
  async function () {
    await locatorCreatingly.dropChart();
  },
);

When(
  'I resize the chart element to fit it into the container size',
  { timeout: 50 * 1000 },
  async function () {
    await locatorCreatingly.resizeChart();
  },
);

When('I try to pick the container and drop it to an invalid artboard',
  { timeout: 50 * 1000 },
  async function () {
    await locatorCreatingly.dragAndDropToInvalidArtboard();
  }
);

Then( 'I should see the {string} error',
  { timeout: 50 * 1000 },
  async function (message) {
    await locatorCreatingly.verifyErrorMessage(message);
  }
);


When( 'I pick the chart and drop it to the artboard',
  { timeout: 50 * 1000 },
  async function () {
    await locatorCreatingly.dragAndDropChartOnArtBoard();
  }
);

Then('the chart should be present on the artboard', async () => {
  await locatorCreatingly.assertChartPresentOnArtBoard();
});
