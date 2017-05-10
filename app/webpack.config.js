const path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    externals : {
        core: 'core'
    },
};
