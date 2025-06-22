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
      },
      html: {
        files: ['src/index.html'], // Watch the main HTML file
        tasks: ['replace:dev'], // Run the replace task when the HTML file changes
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
            {
              match: 'ENDERECO_DO_JS',
              replacement: '../src/scripts/main.js',
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
      dist: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_DO_CSS',
              replacement: './styles/main.min.css',
            },
            {
              match: 'ENDERECO_DO_JS',
              replacement: './scripts/main.min.js',
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['prebuild/index.html'],
            dest: 'dist/',
          },
        ],
      },
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          'prebuild/index.html': 'src/index.html', // Destination file
        },
      },
    },
    clean: ['prebuild'], // Clean the prebuild directory before building
    uglify: {
      target : {
        files: {
          'dist/scripts/main.min.js': ['src/scripts/main.js'], // Minify the main JavaScript file
        },
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-less'); // For compiling LESS files
  grunt.loadNpmTasks('grunt-contrib-watch'); // For watching file changes
  grunt.loadNpmTasks('grunt-replace'); // For replacing text in files
  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // For minifying HTML files
  grunt.loadNpmTasks('grunt-contrib-clean'); // For cleaning directories
  grunt.loadNpmTasks('grunt-contrib-uglify'); // For minifying JavaScript files

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', [
    'less:production',
    'htmlmin:dist',
    'replace:dist',
    'clean',
    'uglify',
  ]);
};
