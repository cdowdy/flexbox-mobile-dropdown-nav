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
                    'css/navigation.<%= grunt.template.today("mm-dd-yyyy") %>.unprefixed.css': 'scss/navigation.scss',
                    'css/demo.<%= grunt.template.today("mm-dd-yyyy") %>.css' : 'scss/demo.scss'
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
                    src: 'css/navigation.<%= grunt.template.today("mm-dd-yyyy") %>.css'
                },
                options: {
                    watchTask: true, // < VERY important
                    proxy: "localhost",
                    files: ["css/*.css", "*.html", "/js/**/*.js"]
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/navigation.<%= grunt.template.today("mm-dd-yyyy") %>.mininfied.css': ['navigation.<%= grunt.template.today("mm-dd-yyyy") %>.unprefixed.css'],
                    'css/demo.<%= grunt.template.today("mm-dd-yyyy") %>.mininfied.css' : ['css/demo.<%= grunt.template.today("mm-dd-yyyy") %>.css']
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'js/navigation.min.js': ['js/navigation.js']
                }
            }
        },

        pleeease: {
            custom: {
                options: {
                    autoprefixer: {'browsers': ['last 4 versions', 'ios 6', 'Android <= 4.4']},
                    filters: {'oldIE': true},
                    rem: ['16px'],
                    minifier: true,
                    mqpacker: false
                },
                files: {
                    'css/navigation.<%= grunt.template.today("mm-dd-yyyy") %>.min.css': 'css/navigation.<%= grunt.template.today("mm-dd-yyyy") %>.unprefixed.css',
                    'css/demo.<%= grunt.template.today("mm-dd-yyyy") %>.min.css' : 'css/demo.<%= grunt.template.today("mm-dd-yyyy") %>.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-pleeease');

    grunt.registerTask('build', ['sass', 'uglify', 'pleeease']);
    grunt.registerTask('default', ['build','browserSync','watch']);
}
