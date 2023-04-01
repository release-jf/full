//export * from "./all";
// @ts-ignore
import {navbar} from "vuepress-theme-hope";

export const allNavbar = navbar([
    "/",
    "/home",
    {text: "Linux文档", icon: "linux", link: "/linux"},
    {text: "工具文档", icon: "tool", link: "/tools"},
    {text: "文章中心", icon: "blog", link: "/article"},
]);