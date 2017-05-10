const path = require("path");

module.exports = {
    entry: './src/extension1.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    externals : {
        core: 'core'
    }
};
