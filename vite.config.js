import { resolve } from "path"
import fs from "fs"
import { defineConfig } from "vite"

import nunjucks from "vite-plugin-nunjucks"

import pkg from "./package.json"

let data = fs.readFileSync("./src/data/data.json");
let parseData = JSON.parse(data);

export default defineConfig({
    base: "./",
    root: resolve(__dirname, "src"),
    build: {
        minify: false, // "terser"
        outDir: resolve(__dirname, "dist"),
        sourcemap: true,
        manifest: true,
        copyPublicDir: true,
        reportCompressedSizeLimit: true,
        rollupOptions: {
            external: ["vanilla-cookieconsent"],
            input: {
                index: resolve(__dirname, "src/index.html"),
                cookieconsent: resolve(__dirname, "src/js/cookieconsent-init.js"),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split(".").at(1);
                    if (/png|jpe?g|svg|gif|tiff|bpm|icon/i.test(extType)) {
                        extType = "images";
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name]-[hash].js",
            }
        }
    },
    publicDir: resolve(__dirname, "public"),
    css: {
        devSourcemap: true
    },
    server: {
        port: 3000,
        hot: true,
        open: true,
    },
    plugins: [
        nunjucks({
            templatesDir: resolve(__dirname, "src/html"),
            // parseData
            variables: parseData
        }),
    ]
});