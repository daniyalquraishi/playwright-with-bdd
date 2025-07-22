((locators = {
  username_input: `xxx-xxx`,
  password_input: `xxx-xxx`,
  sign_in_btn: `xxx-xxx`,
}),
  (credentials = {
    admin_email: 'xxx',
    admin_password: 'xxx-xxx',
  }));

class LoginPage {
  async navigateToLoginScreen() {
    await page.goto(global.BASE_URL, { timeout: 50000 });
    await page.waitForTimeout(5000);
  }
}
module.exports = { LoginPage };
