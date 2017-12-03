import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'
import Profile from '../Profile.vue'
import About from '../About.vue'
import SharedProfile from '../SharedProfile.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/shared/:uid',
            name: 'sharedprofile',
            component: SharedProfile
        }
    ],
    mode: 'history'
})