import {defineUserConfig, viteBundler} from "vuepress";
import theme from "./theme";
import searchPro from "./plugins/searchPro";

export default defineUserConfig({

    base: "/",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "topjf",
            description: "꧁「小牛专属笔记本」꧂",
        },
    },
    plugins: [
        searchPro,
    ],
    theme,
    bundler: viteBundler({
        viteOptions: {
            build: {
                chunkSizeWarningLimit: 12040,
            }
        },
        vuePluginOptions: {},
    }),
    markdown: {
        anchor: {
            level: [2, 3, 4],
        },
        headers: {
            level: [2, 3, 4],
        },
        toc: {
            level: [2, 3, 4],
        },
    },
    head: [
        ["link", {rel: "stylesheet", href: "/iconfont/iconfont.css"}],
    ],

    //预读取，开启pwa后建议为false
    shouldPrefetch: false,
});
