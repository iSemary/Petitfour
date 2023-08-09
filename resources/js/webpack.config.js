const path = require("path");
const glob = require("glob");
const TerserPlugin = require("terser-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = [
    {
        entry: {
            // Collect All hashed js files and put in one file bundle.js
            "bundle.js": glob
                .sync("build/static/js/main.*.js")
                .map((f) => path.resolve(__dirname, f)),
        },
        output: {
            // Move app.min.js to public -> Production
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
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        autoprefixer(),
                                    ],
                                },
                            },
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
