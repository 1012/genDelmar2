module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),


    /*rename : {
        news: {
          src: "site/en/_data/news.html",
          dest: "site/en/_data/news.xml"
        }
    },*/

    connect: {
      dev: {
        options: {
          port: 8000,
          base: './en/'
        }
      }
    },
 

  assemble: {
    options: {
      collections: [{
          name: 'news',
          sortby: 'posted',
          sortorder: 'descending'
      }],
      layout: 'default.hbs',
      layoutdir: './src/bonnet/layouts',
      helpers: './src/bonnet/helpers/*.js',
      partials: './src/bonnet/partials/**/*.hbs',
      language: {"dir" : "/en/"}

    },
    posts: {
      files: [{
        cwd: './src/content/',
        dest: './site/',
        expand: true,
        src: ['**/*.hbs','!_pages/**/*.hbs','!_data/**/*.hbs']
      },{
        cwd: './src/content/_pages/',
        dest: './site/',
        expand: true,
        src: '**/*.hbs'
      },
      {
        options: {ext:".xml"},
        expand: false,
        src: 'src/content/_data/news.hbs',
        dest: "./site/en/_data/news.xml",
      }
      ]
    }
  }
 });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('assemble');
/*  grunt.loadNpmTasks('grunt-i18n-static');*/

  /* grunt tasks */
  grunt.registerTask('default', ['assemble','connect']);

};