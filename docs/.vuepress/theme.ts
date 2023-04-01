import {hopeTheme} from "vuepress-theme-hope";
import {allNavbar} from "./navbar/index";
import {allSidebar} from "./sidebar/index";

export default hopeTheme({
    logo: "/topjf.png",
    hostname: "https://release-jf.github.io",
    author: {
        name: "topjf",
        // 根据自己的域名设置
        url: "/article",
    },
    darkmode: "toggle",/*toggle,auto*/
    //仓库
    repo: "https://github.com/release-jf/full",
    //文档在仓库中的目录
    docsDir: "docs",

    //文档存放分支
    docsBranch: "main",

    // 关键词: "iconfont", "iconify", "fontawesome", "fontawesome-with-brands"
    // 参考：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#设置图标资源
    iconAssets: "iconfont",
    // iconPrefix: "iconfont icon-",

    pure: false,

    themeColor: {
        red: "#e83838",
        green: "#28af73",
        orange: "#fb9b5f",
    },

    fullscreen: true,

    headerDepth: 3,

    pageInfo: ["Author", "Category", "Tag", "Date", "Original", "Word", "PageView", "ReadingTime"],

    locales: {
        "/": {
            // 导航栏
            navbar: allNavbar,

            // 侧边栏
            sidebar: allSidebar,

            blog: {
                sidebarDisplay: "mobile",
                description: "",

                medias: {
                    Github: "https://github.com/release-jf/full",
                },
            },

            // page meta
            metaLocales: {
                editLink: "在 GitHub 编辑此页",
            },
        },
    },

    footer: "", //'<a href="https://beian.miit.gov.cn/" target="_blank">黔ICP备2022xxxxxx号-1</a>',

    displayFooter: true,

    plugins: {

        //其他插件
        components: {
            components: ["ArtPlayer", "AudioPlayer", "Badge", "BiliBili", "CodePen", "FontIcon", "PDF", "StackBlitz", "SiteInfo", "VideoPlayer", "XiGua", "YouTube"],
        },

        //md增强
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            demo: true,
            echarts: true,
            gfm: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            //交互演示
            playground: {
                presets: ["ts", "vue"],
            },
            //幻灯片
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
            //流程图
            flowchart: true,
            //脚注
            footnote: true,
            //自定义容器:提示、注释、信息、注意、警告和详情
            container: true,
            // 启用图片大小
            imgLazyload: true,
            // 启用图片标记
            imgMark: true,
            imgSize: true,
            figure: true,

        },

        copyCode: {
            showInMobile: true,
        },

        photoSwipe: true,

        blog: {
            excerpt: true,
        },

        feed: {
            atom: true,
            rss: true,
            json: true,
        },

        pwa: {
            update: "hint",
            cachePic: true,
            maxSize: 1024 * 8,
            maxPicSize: 1024 * 6,
            //是否缓存除主页和 404 错误页之外的 HTML 文件
            cacheHTML: false,
            appendBase: true,
        },

    },
});
