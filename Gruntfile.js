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
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-less'); // For compiling LESS files
  // grunt.loadNpmTasks('grunt-contrib-uglify'); // For minifying JavaScript files

  // Default task(s).
  grunt.registerTask('default', ['less:development']);
  grunt.registerTask('build', ['less:production']);
};
