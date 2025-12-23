import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";

export default defineConfig({
    entry: {
        main: "./src/index.tsx",
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".json"],
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true,
        client: {
            logging: "info",
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: {
                    loader: "builtin:swc-loader",
                    options: {
                        jsc: {
                            parser: {
                                syntax: "typescript",
                                tsx: true,
                            },
                            transform: {
                                react: {
                                    runtime: "automatic",
                                },
                            },
                        },
                    },
                },
                type: "javascript/auto",
            },
        ],
    },
    plugins: [new rspack.HtmlRspackPlugin()],
});
