module.exports = function(grunt) {

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON("binabacus.jquery.json"),

    // Banner definitions
    meta: {
      banner: "/*\n" +
      " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
      " *  <%= pkg.description %>\n" +
      " *  <%= pkg.homepage %>\n" +
      " *\n" +
      " *  Made by <%= pkg.author.name %>\n" +
      " *  Under <%= pkg.licenses[0].type %> License\n" +
      " */\n"
    },

    // Concat definitions
    concat: {
      dist: {
        src: ["src/jquery.binabacus.js"],
        dest: "dist/jquery.binabacus.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // Lint definitions
    jshint: {
      files: ["src/jquery.binabacus.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    // Minify definitions
    uglify: {
      my_target: {
        src: ["dist/jquery.binabacus.js"],
        dest: "dist/jquery.binabacus.min.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // CoffeeScript compilation
    coffee: {
      compile: {
        files: {
          "dist/jquery.binabacus.js": "src/jquery.binabacus.coffee"
        }
      }
    }

});

grunt.loadNpmTasks("grunt-contrib-concat");
grunt.loadNpmTasks("grunt-contrib-jshint");
grunt.loadNpmTasks("grunt-contrib-uglify");
grunt.loadNpmTasks("grunt-contrib-coffee");

grunt.registerTask("default", ["jshint", "concat", "uglify"]);
grunt.registerTask("travis", ["jshint"]);

};
