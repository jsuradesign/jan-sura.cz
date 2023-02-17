import { resolve } from "path"
import { defineConfig } from "vite"

import nunjucks from "vite-plugin-nunjucks"

import pkg from "./package.json"

export default defineConfig({
    base: "./",
    root: resolve(__dirname, "src"),
    build: {
        minify: "terser",
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
            templatesDir: resolve(__dirname, "src/html"),
            variables: {
                "index.html": {
                    siteName: "Jan Sůra",
                    siteDescription: "WebKodér & WebDesignér",
                    version: pkg.version,
                    repoUrl: pkg.repository.url,
                    jobs: [
                        {
                            id: "01",
                            company: "Nausus, s.r.o.",
                            duration: "06/2016 - 08/2017",
                            position: "HTML & CSS kodér / Web designér",
                            url: "",
                            icons: [
                                {
                                    file: "design-square"
                                },
                                {
                                    file: "code-square"
                                }
                            ]
                        },
                        {
                            id: "02",
                            company: "FaceUp, s.r.o.",
                            duration: "11/2017 - 05/2019",
                            position: "HTML & CSS kodér / Web designér",
                            url: "",
                            icons: [
                                {
                                    file: "design-square"
                                },
                                {
                                    file: "code-square"
                                }
                            ]
                        },
                        {
                            id: "03",
                            company: "Česká televize",
                            duration: "06/2019 - 01/2023",
                            position: "Web UI designér / Grafik",
                            url: "",
                            icons: [
                                {
                                    file: "design-square"
                                }
                            ]
                        },
                        {
                            id: "04",
                            company: "Česká televize",
                            duration: "01/2023 - do současnosti",
                            position: "Junior FrontEnd developer",
                            url: "",
                            icons: [
                                {
                                    file: "code-square"
                                }
                            ]
                        }
                    ],
                    socialLinks: [
                        {
                            id: "01",
                            title: "GitHub",
                            url: "https://github.com/jsuradesign/",
                            icon: "github"
                        },
                        {
                            id: "02",
                            title: "CodePen",
                            url: "",
                            icon: "codepen"
                        },
                        {
                            id: "03",
                            title: "LinkedIn",
                            url: "",
                            icon: "linkedin"
                        },
                        {
                            id: "04",
                            title: "Facebook",
                            url: "",
                            icon: "facebook"
                        }
                    ]
                }
            }
        }),
    ]
});