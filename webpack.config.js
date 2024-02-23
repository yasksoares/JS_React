const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'transpiled', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development',
};

//entry: arquivo que vai inicializar todo o projeto