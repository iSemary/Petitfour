const path = require("path");
const glob = require("glob");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [
    {
        entry: {
            // Collect All hashed js files and put in one file bundle.js
            "bundle.js": glob
                .sync("build/static/js/main.*.js")
                .map((f) => path.resolve(__dirname, f)),
        },
        output: {
            // Move bundle.min.js to public -> Production
            filename: "../../../public/static/js/app.min.js",
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(woff|ttf|otf|eot|woff2|svg)$/i,
                    use: [
                        {
                            loader: "file-loader",
                        },
                    ],
                },
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
        },
        mode: "production",
    },
];
