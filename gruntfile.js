'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-contrib-watch");

    /* Main keys are tasks */
    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: "spec"
                },
                src: ['test/**/*.js']
            }
        },

        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['mochaTest']
            }
        }
    });

    grunt.registerTask('default', 'watch');
}