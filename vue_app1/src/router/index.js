import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/TodoView.vue'
import NoticeView from '../views/NoticeView.vue'
//import UserDetailsView from '../views/UserDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoView
  },
  {
    path: '/notice',
    name: 'notice',
    component: NoticeView
  },
  {
    path: '/user/:id',
    name: 'userdetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserDetailsView.vue'),
    //component: UserDetailsView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
