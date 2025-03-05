const common = `
  --require config/config.js
  --require setup/assertions.js
  --require setup/hooks.js
  --require step-definitions/**/*.js
  --require features/**/login.js
  --format html:./reports/cucumber_report.html
  --format summary
  --format @cucumber/pretty-formatter
  --no-strict
  --publish 
`;

module.exports = {
  default: common,
};
