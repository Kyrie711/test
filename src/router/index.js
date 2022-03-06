import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

const Student = () => import('../views/Student.vue')
const Teacher = () => import('../views/Teacher.vue')
const StuTest = () => import('../views/stu/StuTest.vue')
const StuInfo = () => import('../views/stu/StuInfo.vue')
const StuEdit = () => import('../views/stu/StuEdit.vue')
const StuTestt = () => import('../views/stu_test/StuTestt.vue')
const StuTopic = () => import('../views/stu_test/StuTopic.vue')
const TeaInfo = () => import('../views/tea/TeaInfo.vue')
const TeaEdit = () => import('../views/tea/TeaEdit.vue')
const TeaTest = () => import('../views/tea/TeaTest.vue')
const TeaTestt = () => import('../views/tea_test/TeaTestt.vue')
const TestInfo = () => import('../views/tea_test/TestInfo.vue')
const Lost = () => import('../views/Lost.vue')

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
    children: [
      {
        path: '',
        component: TeaInfo
      },
      {
        path: 'tea_edit',
        component: TeaEdit
      },
      {
        path: 'tea_test',
        component: TeaTest,
        children: [
          {
            path: '',
            component: TeaTestt
          }
        ]
      },
      {
        path: 'test_info',
        component: TestInfo
      }
    ]
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
        path: 'stu_edit',
        component: StuEdit,
      },
      {
        path: 'stu_test',
        component: StuTest,
        children: [
          {
            path: '',
            component: StuTestt
          },
          {
            path: 'stu_topic',
            component: StuTopic
          }
        ]
      }
    ]
  },
  {
    path: '/lost',
    name: 'Lost',
    component: Lost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next();
  } else {
    let token = localStorage.getItem('token');
    console.log(token);
    if (token === null || token === '') {
      next('/lost');
    } else {
      next();
    }
  }
});

export default router
