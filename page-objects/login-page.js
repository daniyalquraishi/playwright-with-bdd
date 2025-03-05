(locators = {
  username_input: `xxx-xxx`,
  password_input: `xxx-xxx`,
  sign_in_btn: `xxx-xxx`,
}),
  (credentials = {
    admin_email: 'xxx',
    admin_password: 'xxx-xxx',
  });

class LoginPage {
  navigateToLoginScreen() {
    return page.goto(global.BASE_URL, { timeout: 50000 });
  }
}
module.exports = { LoginPage };
