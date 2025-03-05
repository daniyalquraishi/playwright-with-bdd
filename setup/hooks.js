const playwright = require('playwright');
const {
  BeforeAll,
  Before,
  After,
  AfterAll,
  Status,
} = require('@cucumber/cucumber');
const cucumber = require('../cucumber');
const { reporter } = require('./../reporter');

const options = {
  headless: true,
  slowMo: 500,
};

BeforeAll(async () => {
  global.browser = await playwright['chromium'].launch(options);
});

Before(async () => {
  console.log('before ...');
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const buffer = await global.page.screenshot({
      path: `reports/${scenario.pickle.name}.png`,
      fullPage: true,
    });
    this.attach(buffer, 'image/png');
  }
  await global.browser.close();
});

AfterAll(async function () {
  await global.browser.close();
});
