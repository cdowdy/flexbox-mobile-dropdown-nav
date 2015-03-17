module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                options: {
                    outputStyle: 'nested'
                },
                files: {
                    'css/navigation.unprefixed.css': 'scss/navigation.scss',
                    'dist/css/flexbox-only/nav-flexbox-only.css' : 'scss/flex-only.scss',
                    'css/demo.css' : 'scss/demo.scss'
                }
            }
        },

        watch: {
            grunt: { files: ['Gruntfile.js'] },

            sass: {
                files: 'scss/**/**/*.scss',
                tasks: ['sass']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: 'css/navigation.css'
                },
                options: {
                    watchTask: true, // < VERY important
                    proxy: "localhost",
                    files: ["css/*.css", "*.html", "/js/**/*.js"]
                }
            }
        },

        // *************************************************************************************************************
        // Minify and combine files
        // *************************************************************************************************************
        cssmin: {
            options: {
                shorthandCompacting: true,
                roundingPrecision: -1,
                report: 'gzip'
            },
            dev: {
                files: {
                    'css/navigation.min.css': ['css/dist/navigation.min.css'],
                    'css/demo.mininfied.css' : ['css/demo.css']
                }
            },
            dist: {
                files: {
                    //'dist/css/navigation.min.css': ['css/navigation.min.css'],
                    'dist/css/flexbox-only/nav-flexbox-only.min.css' : ['dist/css/flexbox-only/nav-flexbox-only.css'],
                    'dist/css/no-prefixes-with-fallback/navigation.unprefixed.min.css' : ['css/navigation.unprefixed.css']
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'js/navigation.min.js': ['js/navigation.js'],
                    'js/navigation.android-2.3.min.js' : ['js/classList.poly.js', 'js/navigation.js']
                }
            },
            dist: {
                files: {
                    'dist/js/navigation.min.js': ['js/navigation.js'],
                    'dist/js/navigation.android-ie8.min.js' : ['js/classList.poly.js', 'js/navigation.js']
                }
            }
        },

        pleeease: {
            custom: {
                options: {
                    autoprefixer: {'browsers': ['last 4 versions', 'ios 5', 'Android <= 4.4']},
                    filters: {'oldIE': true},
                    rem: ['16px', {'replace': false, 'atrules': true}],
                    minifier: true,
                    mqpacker: true,
                    pseudoElements: true,
                    opacity: true
                },
                files: {
                    'css/navigation.min.css': 'css/navigation.unprefixed.css',
                    'css/demo.min.css' : 'css/demo.css'
                }
            },
            dist: {
                options: {
                    autoprefixer: {'browsers': ['last 4 versions', 'ios 5', 'Android <= 4.4']},
                    filters: {'oldIE': true},
                    rem: ['16px', {'replace': false, 'atrules': true}],
                    minifier: true,
                    mqpacker: true,
                    pseudoElements: true,
                    opacity: true
                },
                files: {
                    'dist/css/navigation.min.css': 'css/navigation.unprefixed.css'
                }
            }

        },

        filerev: {
            options: {
                algorithm: 'md5',
                length: 8
            },
            no_prefix: {
                src: 'dist/css/no-prefixes-with-fallback/*.css'
            },
            flex_only: {
                src: 'dist/css/flexbox-only/*.css'
            },
            dist: {
                src: 'dist/css/*.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-pleeease');
    grunt.loadNpmTasks('grunt-filerev');

    grunt.registerTask('build', ['sass', 'uglify:dist', 'pleeease:dist', 'cssmin:dist', 'filerev']);
    grunt.registerTask('dev', ['sass', 'browserSync', 'watch']);
    grunt.registerTask('default', ['build','browserSync','watch']);
};
