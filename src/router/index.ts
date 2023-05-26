// 使用路由懒加载
import { lazy } from "react";
// 引入组件
const index = lazy(() => import("../views"));
const video = lazy(() => import("../views/video"));
const notFound = lazy(() => import("../components/notFound"));
const routes = [
    // home
    {
        path: "/",
        component: index,
    },
    // about
    {
        path: "/video",
        component: video,
    },
    // 404
    {
        path: "*",
        component: notFound,
    },
];
export default routes;
