import { createWebHistory, createRouter } from "vue-router"

import Layout from "../components/Layout.vue"

import Home from "../pages/Home.vue"
import Pekerjaan from "../pages/Pekerjaan.vue"
import Pendidikan from "../pages/Pendidikan.vue"
import Skill from "../pages/Skill.vue"
import P404 from "../pages/404.vue"

const routes = [
    {
        path : '/',
        component: Layout,
        children: [
            {
                path : '/',
                component: Home,
                name : 'Home',
            },
            {
                path : '/experience',
                component : Pekerjaan,
                name : 'Experience',
            },
            {
                path : '/skill',
                component : Skill,
                name : 'Skill',
            },
            {
                path : '/education',
                component : Pendidikan,
                name : 'Education',
            }
        ]
    },
    {
        path : "/:catchAll(.*)",
        component: P404,
        name : '404',
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes : routes,
  });

export default router