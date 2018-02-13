node {
    deleteDir()
    try {
        stage ('Clone') {
        	checkout scm
        }
        stage ('Build') {
        sh "echo 'Installing Bibliotheca NPM packages.'"
		    sh "npm install"
		    sh "echo 'Starting Bibliotheca Building'"
		    sh "ng build -- prod"
        sh "echo 'Bibliotheca builded with success.'"
        }
      	stage ('Deploy') {
            sh "echo 'Deploying Bibliotheca'"
            sh "mv /var/www/bibliotheca/ /var/www/bibliotheca-\$(date -d 'today' +'%Y%m%d%H%M')"
	          sh "cp -r dist/ /var/www/bibliotheca"
      	}
    } catch (err) {
        currentBuild.result = 'FAILED'
        throw err
    }
}
