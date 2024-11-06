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

        stage('Install Docker Compose') {
            steps {
                script {
                    // Install jq first
                    sh 'apt-get update && apt-get install -y jq' // For Debian/Ubuntu-based systems
                    
                    // Check if docker-compose is installed, if not install it
                    sh '''
                        if ! command -v docker-compose &>/dev/null; then
                            echo "docker-compose not found, installing..."
                            curl -s https://api.github.com/repos/docker/compose/releases/latest | jq -r .tag_name
                            curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | jq -r .tag_name)/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
                            chmod +x /usr/local/bin/docker-compose
                        else
                            echo "docker-compose is already installed"
                        fi
                    '''
                }
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
                    sh ' npm run test:ci'
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    // Build and start containers using docker-compose
                    sh 'export PATH=$PATH:/usr/local/bin && docker-compose up --build -d'
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
