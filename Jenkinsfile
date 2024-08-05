pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build' // Assuming you have a build script, modify as needed
            }
        }
    }

    post {
        always {
            junit 'test-results.xml' // Publish test results
            archiveArtifacts artifacts: '**/build/**/*.*', allowEmptyArchive: true
        }
    }
}
