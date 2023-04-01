import {sidebar} from 'vuepress-theme-hope';

/**
 * 应该把更精确的路径放置在前边
 * "structure",
 */
export const allSidebar = sidebar({
    '/linux/': "structure",
    '/tools/': "structure",
    '/': [
        "",
    ],
});
