const path = require("path");

module.exports = {
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 9000,
		index: "index.html"
	},
	entry: "./app/src/index.js", // какой модуль собирать (home)
	output: { // куда выводить
		filename: "index.js",
		path: path.resolve(__dirname, "dist")
	},
	mode: "development",
	devtool: "eval",
	module: {
		rules: [
			{
				test:/\.css$/,
				use: ["style-loader","css-loader"]
			},
			{
				test:/\.(png|svg|jpg)$/,
				use: ["file-loader"]
			},
			{
				test:/\.jsx?$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						plugins: [
							// Stage 0
				            "@babel/plugin-proposal-function-bind",
				            // Stage 1
				            "@babel/plugin-proposal-export-default-from",
				            "@babel/plugin-proposal-logical-assignment-operators",
				            ["@babel/plugin-proposal-optional-chaining", { loose: false }],
				            [
				              "@babel/plugin-proposal-pipeline-operator",
				              { proposal: "minimal" }
				            ],
				            [
				              "@babel/plugin-proposal-nullish-coalescing-operator",
				              { loose: false }
				            ],
				            "@babel/plugin-proposal-do-expressions",
				            // Stage 2
				            ["@babel/plugin-proposal-decorators", { legacy: true }],
				            "@babel/plugin-proposal-function-sent",
				            "@babel/plugin-proposal-export-namespace-from",
				            "@babel/plugin-proposal-numeric-separator",
				            "@babel/plugin-proposal-throw-expressions",
				            // Stage 3
				            "@babel/plugin-syntax-dynamic-import",
				            "@babel/plugin-syntax-import-meta",
				            ["@babel/plugin-proposal-class-properties", { loose: false }],
				            "@babel/plugin-proposal-json-strings"
						]
					}
				}
			}
		]
	}
}
