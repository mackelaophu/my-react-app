pipeline {
    agent any  // Chạy trên bất kỳ agent nào có sẵn

    environment {
        // Định nghĩa biến môi trường
        GIT_CREDENTIALS = 'abc'
        PATH = "/opt/homebrew/bin:$PATH" 
    }

    stages {
        stage('Checkout') {
            steps {
                // Lệnh kiểm tra mã nguồn từ Git
                // checkout scm
                git(
                    branch: 'main',
                    url: 'https://github.com/mackelaophu/my-react-app.git',
                    credentialsId: "${env.GIT_CREDENTIALS}"
                )
            }
        }
        stage('Install Global npm Packages') {
            steps {
                sh 'npm install -g create-react-app eslint npm-check-updates typescript'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Cài đặt các dependency (ví dụ npm install cho dự án ReactJS)
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Xây dựng dự án
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                // Triển khai dự án
                echo 'Deploying the app...'
            }
        }
    }

    post {
        // Các bước sau khi hoàn thành pipeline
        always {
            echo 'This will run after the pipeline finishes'
        }
        success {
            echo 'This will run if the pipeline succeeds'
        }
        failure {
            echo 'This will run if the pipeline fails'
        }
    }
}