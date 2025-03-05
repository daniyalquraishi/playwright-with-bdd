# Playwright with BDD

This project automates the testing of the **Playwright with BDD Boilerplate** using [Playwright](https://github.com/microsoft/playwright) and Cucumber for a seamless behavior-driven development (BDD) approach.

## Features

- **Playwright** for cross-browser automation.
- **Cucumber** for BDD-style test execution.
- **Jenkins Integration** for continuous integration and delivery.
- **Nodemailer** for email notifications, including test results.
- **Prettier** for consistent code formatting.

## Installation

To set up the project, clone the repository and run:

```bash
npm install
```

```bash
npx playwright install
```

## Running the Tests

Use the following commands to run tests:

- Run specific tagged tests:

  ```bash
  npx cucumber-js --tags <specific_tag>
  ```

- Run a specific feature file:

  ```bash
  npx cucumber-js <featurefilepath>
  ```

- Run all tests:

  ```bash
  npx cucumber-js
  ```

- Run all tests and send report in email:

  ```bash
  node run-tests.js
  ```

## Reporting

**Cucumber HTML Report** will be generated at the end of the test execution. Failed scenarios include attached screenshots for easier debugging. Reports can be found in the `reports` directory.

## Jenkins Integration

The project integrates with Jenkins to automate the execution of test cases. Jenkins triggers can be configured for scheduled runs, branch-specific execution, or pull request validation.

## Email Notifications

Email notifications are set up using **Nodemailer** to send test execution results. Ensure proper configuration of email credentials in the environment variables before using this feature.

## Prettier Integration

Prettier is integrated for consistent code formatting.

- To format the code, run::

  ```bash
  npx prettier --write .
  ```

## 👤 Author  
**Daniyal Qureshi**  

[🔗 LinkedIn Profile](https://www.linkedin.com/in/daniyalquraishi/)  

📧 **Email:** daniyalqureshi212@gmail.com  

💼 **Services:**  
- Web Automation  
- Mobile Automation  
- Manual Testing  
- Performance Testing  
- Automation Solutions  

## Contributing

Feel free to raise issues or submit pull requests to enhance this project.
