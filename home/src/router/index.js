import {createRouter, createWebHistory} from "vue-router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'// nprogress样式文件
import Home from '@/views/Home/index.vue'

// 进度条配置
NProgress.configure({
    easing: 'ease',  // 动画方式
    speed: 500,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})


const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/article/:id",
        name: "article",
        component: () => import("@/views/Article/index.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/views/About/index.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});


//当路由开始跳转时
router.beforeEach((to, from , next) => {
    // 开启进度条
    NProgress.start();
    // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
    next();
});
//当路由跳转结束后
router.afterEach(() => {
    // 关闭进度条
    NProgress.done()
})

export default router;
