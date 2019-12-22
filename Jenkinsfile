pipeline{
    agent any
    environment {
        pkgName = "ms-parametricas"
        dockerImageDeploy = "$NEXUS_REPOSITORY_URL_DEV/ms-parametricas"
    }
    tools {nodejs "jenkins-nodejs"}
    triggers {
        gitlab(triggerOnPush: true, triggerOnMergeRequest: true, branchFilterType: 'All')
    }
    options {
      gitLabConnection('gitlab-trebol')
      gitlabCommitStatus(name: 'jenkins')
      gitlabBuilds(builds: ['checkout', 'install modules', 'test', 'code quality','build','SonarQube analysis','Docker and Nexus','Deploy'])
    }
    stages {
        stage ('checkout'){
            steps{
                gitlabCommitStatus(name: 'checkout') {
                    echo 'Pulling...' + env.BRANCH_NAME
                    checkout scm
                }
            }
        }
        stage ('install modules'){
            steps{
                gitlabCommitStatus(name: 'install modules') {
                     sh 'npm install --production'
                }
            }
        }
   
        stage ('test'){
            steps{
                 gitlabCommitStatus(name: 'test') {
                    echo 'running tests...'
                    sh 'npm run test:coverage'
                 }
            }
        }

        stage ('build') {
            steps{
                 gitlabCommitStatus(name: 'build') {
                    sh 'npm run build'
                 }
                
            }
        }
        stage('SonarQube analysis') {
            steps {
                  gitlabCommitStatus(name: 'SonarQube analysis') {
                    script{
                        def scannerHome = tool 'sonar-scanner';
                        withSonarQubeEnv('Sonar Desarrollo') {
                            sh "${scannerHome}/bin/sonar-scanner"
                            sleep(time:10,unit:"SECONDS")
                        }                    
                    }
                    script {
                        timeout(time: 3, unit: 'MINUTES') {
                            def qgate = waitForQualityGate()
                            if (qgate.status != 'OK') {
                            error "Pipeline aborted due to quality gate failure: ${qgate.status}"
                            }
                        }
                    }
                }
            }
        }
        stage ('Docker and Nexus') {
         when {
                branch 'trebol/develop'
            }
            steps{
                 gitlabCommitStatus(name: 'Docker and Nexus') {
                        echo "Deploying on develop environment..."
                        sh 'docker image build -t ms-parametricas .'
                        sh "docker tag ms-parametricas $NEXUS_REPOSITORY_URL_DEV/ms-parametricas"
                        sh "docker push $NEXUS_REPOSITORY_URL_DEV/ms-parametricas"
                 }
                    
            }
            
        }
        stage ('Deploy') {

          when {
                branch 'trebol/develop'
            }
            steps{
                  gitlabCommitStatus(name: 'Deploy') {
                    sh '''
                        echo "Actualizando configmap"
                        kubectl create configmap ${pkgName} --from-file=environment/trebol.properties --dry-run -o yaml | kubectl apply -f -
                        echo "Actualizando contenedor"
                        kubectl set image deployment/${pkgName} ${pkgName}-container=${dockerImageDeploy}
                    '''
                  }

            }
        }
    }
    post {
        always {
            echo 'Limpiando espacio de trabajo.'
            cleanWs()
        }
        success {
            echo 'Finalizado con exito'
            updateGitlabCommitStatus(name: 'Jenkins', state: 'success')
            slackSend (channel: '#cca-mgss',
                    color: 'good',
                    message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
            )
        }
        unstable {
            echo 'Algun paso del pipeline ha fallado.'
            updateGitlabCommitStatus(name: 'Jenkins', state: 'failed')
            slackSend (channel: '#cca-mgss',
                    color: 'bad',
                    message: "*${currentBuild.currentResult}:*  Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
            )
        }
        failure {
            echo 'El pipeline ha fallado.'
            updateGitlabCommitStatus(name: 'Jenkins', state: 'failed')
             slackSend (channel: '#cca-mgss',
                    color: 'bad',
                    message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
            )
        }
        aborted {
            echo 'Algo ha cambiado en el repositorio.'
            updateGitlabCommitStatus(name: 'Jenkins', state: 'canceled')
             slackSend (channel: '#cca-mgss',
                    color: 'bad',
                    message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
            )
        }
    }
}
