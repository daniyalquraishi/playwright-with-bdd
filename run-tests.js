const { exec } = require('child_process');
const fs = require('fs');
const nodemailer = require('nodemailer');

// Function to send email with the report link
async function sendEmail(reportLink) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ypur gmail account',
      pass: 'your-app-password',
    },
  });

  const mailOptions = {
    from: 'email',
    to: 'email',
    subject: 'Test Automation Report',
    text: `Hi Team,\n\nThe Cucumber test report is ready. You can view it at the following link:\n\n${reportLink}\n
    This report will self-destruct in a day.\n\n
    Best regards,\nDaniyal Qureshi`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error while sending email:', error);
  }
}

// Execute Cucumber tests and capture the output
exec('npx cucumber-js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing tests: ${error.message}`);
    return;
  }
  const output = stdout + stderr;
  const reportRegex = /https:\/\/reports\.cucumber\.io\/reports\/[a-zA-Z0-9-]+/;
  const match = output.match(reportRegex);

  if (match) {
    const reportLink = match[0];
    console.log('Report link captured:', reportLink);
    sendEmail(reportLink);
  } else {
    console.log('Report link not found in the output.');
  }
});
