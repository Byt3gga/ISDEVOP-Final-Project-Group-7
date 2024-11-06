pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Reference to the NodeJS tool defined in Jenkins
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

         stage('Install Docker Compose') {
            steps {
                script {
                    // Check if docker is installed, and install it if missing
                    def dockerInstalled = sh(script: 'command -v docker', returnStatus: true)
                    if (dockerInstalled != 0) {
                        echo 'Docker is not installed. Installing Docker...'
                        sh 'apt-get update && apt-get install -y docker.io'  // Install Docker
                    } else {
                        echo 'Docker is already installed.'
                    }

                    // Check if Docker Compose is installed, and install it if missing
                    def dockerComposeInstalled = sh(script: 'command -v docker-compose', returnStatus: true)
                    if (dockerComposeInstalled != 0) {
                        echo 'Docker Compose is not installed. Installing Docker Compose...'
                        sh 'curl -L https://github.com/docker/compose/releases/download/v2.10.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose'
                        sh 'chmod +x /usr/local/bin/docker-compose'
                    } else {
                        echo 'Docker Compose is already installed.'
                    }
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
