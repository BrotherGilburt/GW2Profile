import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import About from '../pages/About'
import SharedProfile from '../pages/SharedProfile'

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