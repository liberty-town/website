import {createRouter, createWebHistory} from "vue-router"

import Home from "src/views/pages/home"
import Download from "src/views/pages/download"
import BlogHowToAccessTheDarkWeb from "../views/pages/blog/how-to-access-the-dark-web"
import BlogHowToAccessTheDeepWeb from "../views/pages/blog/how-to-access-the-deep-web"
import BlogHowToAccessDarknet from "../views/pages/blog/how-to-access-darknet"
import BlogTorDarkWeb from "../views/pages/blog/tor-dark-web"
import BlogDarkWebBrowser from "../views/pages/blog/dark-web-browser"
import Articles from "../views/pages/blog/articles"

const routes = [
    {path: '/', component: Home },
    // {path: '/download', component: Download },
    {path: '/articles', component: Articles },
    {path: '/how-to-access-the-dark-web', component: BlogHowToAccessTheDarkWeb },
    {path: '/tor-dark-web', component: BlogTorDarkWeb },
    {path: '/dark-web-browser', component: BlogDarkWebBrowser },
    {path: '/how-to-access-the-deep-web', component: BlogHowToAccessTheDeepWeb },
    {path: '/how-to-access-darknet', component: BlogHowToAccessDarknet },
];

export default createRouter({
    base: '/',
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) return { el: to.hash }
        if (savedPosition) return savedPosition;
        return { x: 0, y: 0 }
    },
    routes
});

