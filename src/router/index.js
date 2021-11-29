import { createRouter, createWebHashHistory } from 'vue-router';
import store from '../store'

const routes = [
    {
        name: "Settings",
        path: "/settings",
        meta: {
            componentName: "appBookmarkList"
        },
        component: () => import("@/views/Account.vue")
    },
    {
        name: "Favorites",
        path: "/favorites",
        meta: {
            componentName: "appBookmarkList"
        },
        component: () => import("@/views/Account.vue")
    },
    {
        name: "Likes",
        path: "/likes",
        meta: {
            componentName: "appBookmarkList"
        },
        component: () => import("@/views/Account.vue")
    },
    {
        name: "HomePage",
        path: "/",
        component: () => import("@/views/Home.vue")
    },
    {
        name: "Account",
        path: "/account",
        component: () => import("@/views/Account.vue")
    },
    {
        name: "Register",
        path: "/register",
        component: () => import("@/views/Register")
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("@/views/Login")
    },
    {
        name: "NewBookmarkPage",
        path: "/new",
        component: () => import("@/views/NewBookmark")
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
});

router.beforeEach((to, from, next) => {
    const authRequiredRoutes = ["HomePage"]
    const authNotRequiredRoutes = ["Login", "Register"]
    const _isAuthenticated = store.getters._isAuthenticated
    if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) {
        next(false);
    }
    if (authRequiredRoutes.indexOf(to.name) > -1) {
        if (_isAuthenticated) next();
        else next({ name: "Login" });
    }
    console.log("to", to);
    console.log("from", from);
    next()



})

export default router;