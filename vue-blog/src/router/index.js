import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Article from '@/components/article'
import Photo from '@/components/photo'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/article',
        name: 'article',
        component: Article
    }, {
        path: '/photo',
        name: 'photo',
        component: Photo
    }]
})