module.exports = function (grunt) {
    'use strict'
    grunt.loadNpmTasks('grunt-contrib-connect')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-jshint')

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            'static': {
                options: {
                    port: 3000,
                    base: './usage'
                }
            }
        },

        sass: {
            options: {
                sourceMap: true,
                interval: 2029
            },
            stylesheets: {
                files: {
                    './usage/stylesheets/iniboot.css': './stylesheets/iniboot.scss',
                    './usage/stylesheets/usage.css': './stylesheets/usage.scss'
                }
            }
        },

        watch: {
            stylesheets: {
                files: './stylesheets/*.scss',
                tasks: ['sass:stylesheets'],
                options: {
                    spawn: false
                }
            }
        },

        jshint: {
            options: {
                jshintrc: true
            },
            all: [
                'Gruntfile.js',
                'bower.json',
                'package.json'
            ]
        }
    })

    grunt.registerTask('runserver', function () {
        grunt.task.run([
            'sass:stylesheets',
            'connect:static',
            'watch:stylesheets'
        ])
    })
}
