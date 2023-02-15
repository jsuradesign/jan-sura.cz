import { resolve } from "path"
import { defineConfig } from "vite"

import nunjucks from "vite-plugin-nunjucks"

import pkg from "./package.json"

export default defineConfig({
    root: resolve(__dirname, "src"),
    build: {
        outDir: resolve(__dirname, "dist"),
        sourcemap: true,
        copyPublicDir: true,
        reportCompressedSizeLimit: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src/index.html"),
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
            templatesDir: resolve(__dirname, "src/html")
        }),
    ]
});
