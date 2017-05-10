const path = require("path");

module.exports = {
    entry: './src/core.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        library: "core",
    },
};
