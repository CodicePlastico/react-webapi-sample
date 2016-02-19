/// <binding />
var path = require('path');

var vendorJs = ['jquery', 'bootstrap', 'react', 'react-dom', 'react-router', 'react-datepicker', 'flux', 'superagent', 'lodash', 'numeral', 'moment', 'moment/locale/it', 'moment/locale/fr', 'moment/locale/de', 'moment/locale/es', 'cookie', 'async'];
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true,
                nospawn: true
            },
            client: {
                files: ['client/js/**/*.js', 'client/js/**/*.jsx'],
                tasks: ['jshint', 'babel:client', 'browserify:app'],
                options: {
                    livereload: true
                }
            },
            sass: {
                files: ['src/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        },
        copy: {
            assets: {
                files: [
                  { expand: true, cwd: 'client/', src: '*.html', dest: 'wwwroot/' },
                  { expand: true, cwd: 'client/images/', src: '**/*', dest: 'wwwroot/images' },
                  { expand: true, cwd: 'client/fonts/', src: '**/*', dest: 'wwwroot/fonts' },
                  { expand: true, cwd: 'client/vendor/font-awesome/fonts/', src: '*', dest: 'wwwroot/fonts' },
                  { expand: true, cwd: 'client/images/', src: '*', dest: 'wwwroot/images' }
                ]
            },
        },
        babel: {
            options: {
                blacklist: ["strict"]
            },
            client: {
                expand: true,
                cwd: 'client/js/',
                src: ['**/*.js', '**/*.jsx'],
                dest: '.temp/js',
                ext: '.js'
            },
        },
        browserify: {
            options: { browserifyOptions: { debug: true } },
            vendor: {
                src: [],
                dest: 'wwwroot/js/vendor.js',
                options: {
                    require: vendorJs
                }
            },
            app: {
                options: {
                    external: vendorJs
                },
                src: ['.temp/js/App.js'],
                dest: 'wwwroot/js/App.js'
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                ignores: [],
                esnext: true
            }
        },
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'wwwroot/styles/style.css': 'client/styles/style.scss'
                }
            }
        },
        clean: ["dist"]
    });

    grunt.registerTask('default', ['clean', 'jshint', 'sass', 'babel', 'copy:assets', 'browserify'/*, 'watch'*/]);
    grunt.registerTask('devel', ['default', 'watch']);
};