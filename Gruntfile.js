module.exports = function (grunt) {

//// Configuration /////////////////////////////////////////////////////////////

	grunt.initConfig({

		// read package information
		pkg: grunt.file.readJSON('package.json'),

		// uglify configuration
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			release: {
				src: [
					'source/lib/**/*.js',
					'build/jsx/**/*.js',
				],
				dest: 'build/<%= pkg.name %>.min.js'
			}
		}

		// jsx configuration
		jsx: {
			release: {
				src: 'source/scripts/**/*.js',
				dest: 'build/jsx',
				executable: 'node',
				release: false,
			},
		}

	});

//// Tasks /////////////////////////////////////////////////////////////////////

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['jsx', 'uglify']);

};