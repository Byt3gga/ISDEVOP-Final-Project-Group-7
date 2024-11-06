pipeline {
    agent {
        docker {
            image 'docker/compose:latest'  // Use a pre-built Docker image with Docker Compose installed
        }
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

        stage('Run Tests') {
            steps {
                script {
                    sh 'npm run test:ci'
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    // Use docker-compose in the pre-configured container
                    sh 'docker-compose up --build -d'
                }
            }
        }

        stage('Monitoring & Logging') {
            steps {
                script {
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
