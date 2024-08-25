import { createWebHistory, createRouter } from 'vue-router'


const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/login/login.vue"),

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router