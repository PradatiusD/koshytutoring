module.exports = (grunt) -> 
	grunt.initConfig(
		
		'ftp-deploy':
			build:
				auth:
					host: 'pradadesigners.com'
					port: 21
					authKey: 'key1'
				src: 'dist'
				dest: ''
				# exclusions: [
				# 	'css',
				# 	'img',
				# 	'js'
				# ]

		sass:
			dist:
				options:
					style: 'expanded'
				files:
					'dist/css/main.css': 'dist/css/main.scss'
		watch:
			deploy:
				files: 'dist/*'
				tasks: ['ftp-deploy']
			styles:
				files: 'dist/css/main.scss'
				tasks: ['sass']

	)

	grunt.loadNpmTasks('grunt-contrib-sass')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-ftp-deploy')
	grunt.registerTask('default', ['watch'])
	grunt.registerTask('deploy', ['sass','sftp-deploy'])
