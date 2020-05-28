import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/views/home'
import login from '@/views/login'
import article from '@/views/article'
import video from '@/views/video'
import question from '@/views/question'
import search from '@/views/search'
import user from '@/views/user'
import layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/article',
    name: 'article',
    component: article
  },
  {
    path: '/question',
    name: 'question',
    component: question
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/video',
    name: 'video',
    component: video
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/layout',
    name: 'layout',
    component: layout
  }
]

const router = new VueRouter({
  routes
})

export default router
