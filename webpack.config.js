'use strict';

var path = require('path');

module.exports = {
    entry: './home.js',
    output: {
        path: path.resolve('dist'),
        filename: 'build.js',
        library: "home"
    }
}