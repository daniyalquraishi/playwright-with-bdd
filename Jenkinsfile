pipeline {
    agent any

    tools {
        nodejs 'NodeJS' 
    }

    environment {
        NODE_ENV = 'test'
    }

    triggers {
        // cron('0 17 * * *')
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']], 
                    userRemoteConfigs: [[
                        url: 'your-repository-name', 
                        credentialsId: 'credential-id' 
                    ]]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Install Browser Dependencies') {
            steps {
                echo 'Installing browser dependencies for Playwright...'
                sh 'npx playwright install-deps'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running Playwright tests with Cucumber...'
                sh 'node run-tests.js'
                // sh 'npx cucumber-js'
                // sh 'npm run test'
            }
        }

        stage('Publish Report') {
            steps {
                echo 'Archiving Cucumber report...'
                archiveArtifacts artifacts: 'reports/cucumber_report.html', allowEmptyArchive: true
                // echo 'Generating Cucumber report in readable format...'
                // sh 'npx cucumber-html-reporter --source reports/cucumber_report.json --dest reports/cucumber_report.html --theme bootstrap'
                // node run-tests.js
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        failure {
            echo 'Pipeline failed!'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
    }
}
