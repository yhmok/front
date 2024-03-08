import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '../views/StudentListView.vue'
import StudentEditView from '../views/StudentEditView.vue'
import StudentCreateView from '../views/StudentCreateView.vue'

const routes = [
  {
    path: '/',
    name: 'StudentListView',
    component: StudentListView
  },
  {
    path: '/edit/:id',
    name: 'StudentEditView',
    component: StudentEditView
  },
  {
    path: '/create',
    name: 'StudentCreateView',
    component: StudentCreateView
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
