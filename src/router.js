import Vue from "vue"
import Router from "vue-router"
import { Home, Login, SignUp, Likes } from './views'
import { isAuthenticated } from './utils'

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        protected: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        protected: false,
      },
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
      meta: {
        protected: false,
      },
    },
    {
      path: "/likes",
      name: "likes",
      component: Likes,
      meta: {
        protected: true,
      },
    },
  ]
})

router.beforeEach((to, frm, next) => {
  if (to.meta.protected && !isAuthenticated()) {
    next({ name: 'login' })
  }
  else {
    next()
  }
})

export default router