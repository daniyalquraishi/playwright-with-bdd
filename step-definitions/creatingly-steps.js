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
