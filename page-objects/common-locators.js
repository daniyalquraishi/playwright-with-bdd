class commonLocatorsPage {
  async navigateToLoginScreen() {
    await page.goto(global.BASE_URL, { timeout: 50000 });
    await page.waitForTimeout(5000);
  }
}

module.exports = { commonLocatorsPage };
