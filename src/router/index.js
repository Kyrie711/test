import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

const Student = () => import('../views/Student.vue')
const Teacher = () => import('../views/Teacher.vue')
const StuTest = () => import('../views/stu/StuTest.vue')
const StuInfo = () => import('../views/stu/StuInfo.vue')
const StuEdit = () => import('../views/stu/StuEdit.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher,
    
  },
  {
    path: '/student',
    name: 'Student',
    component: Student,
    children: [
      {
        path: '',
        component: StuInfo
      },
      {
        path: 'stu_test',
        component: StuTest
      },
      {
        path: 'stu_edit',
        component: StuEdit
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
