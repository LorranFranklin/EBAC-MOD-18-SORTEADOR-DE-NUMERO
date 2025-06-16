const { option } = require('grunt');

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          'dev/styles/main.css': 'src/styles/main.less',
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          'dist/styles/main.min.css': 'src/styles/main.less',
        },
      },
    },
    watch: {
      less: {
        files: ['src/styles/**/*.less'], // Watch all LESS files in the src/styles directory
        tasks: ['less:development'], // Run the development task when a file changes
        options: {
          spawn: false, // Do not spawn a new process for each change
        },
      },
    },
    replace: {
      dev: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_DO_CSS',
              replacement: './styles/main.css',
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['dev/index.html'],
            dest: 'dev/',
          },
        ],
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-less'); // For compiling LESS files
  grunt.loadNpmTasks('grunt-contrib-watch'); // For watching file changes
  grunt.loadNpmTasks('grunt-replace'); // For replacing text in files
  // grunt.loadNpmTasks('grunt-contrib-uglify'); // For minifying JavaScript files

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['less:production']);
};
