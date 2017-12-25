import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import About from '@/pages/About'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
import SharedProfile from '@/pages/SharedProfile'
import NotFound from '@/pages/NotFound'

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
            path: '/signin',
            name: 'signin',
            component: SignIn
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/shared/:uid',
            name: 'sharedprofile',
            component: SharedProfile
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        }
    ],
    mode: 'history'
})