pipeline {
    agent any

    tools {
        nodejs "NodeJS"  // Reference to the NodeJS tool defined in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Byt3gga/ISDEVOP-Final-Project-Group-7.git' // Replace with your repository URL
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'chmod +x node_modules/.bin/react-scripts'  // Ensure react-scripts has execute permissions
                sh 'npm install jest-junit --save-dev'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        /*
        stage('Prepare Directories') {
            steps {
                script {
                    sh 'mkdir -p test-results'
                }
            }
        }
        */
        stage('Run Tests') {
            steps {
                script {
                    sh ' npm run test:ci'
                }
            }
        }
        
        /*
        stage('Infrastructure as Code') {
            steps {
                script {
                    // Example IaC step using Docker or Terraform
                    sh 'terraform init && terraform apply -auto-approve'
                }
            }
        }
        */

        stage('Deploy Application') {
            steps {
                script {
                    // Build and start containers using docker-compose
                    sh 'docker-compose up --build -d'
                }
            }
        }

        stage('Monitoring & Logging') {
            steps {
                script {
                    // Commands to trigger monitoring tools, e.g., Prometheus + Grafana
                    echo "Monitoring and logging setup placeholder"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Build successful!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
