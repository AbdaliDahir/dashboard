import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '/',
          name: 'dahsboard',
          component: () => import('./views/content/HomeContent1.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about', 
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login', 
      component: () => import('./views/auth/demo1/Login.vue'),
      children: [
        {
          path: '/',
          name: 'login',
          component: () => import('./views/auth/forms/LoginForm.vue')
        },
        {
          path: 'sign-up',
          name: 'signUp',
          component: () => import('./views/auth/forms/SignUp.vue')
        },
        {
          path: 'recove-password',
          name: 'RecovePassword',
          component: () => import('./views/auth/forms/RecoverPassword.vue')
        }
      ]
    },
    // Profile 
    {
      path: '/profile', 
      component: () => import('./views/profile/profile.vue'),
      children: [
        {
          path: '/',
          name: 'profileContent',
          component: () => import('./components/profile/content.vue'),
          children: [
            {
              path: 'overview',
              name: 'profile',
              component: () => import('./components/profile/myprofile/myprofile.vue')
            }, 
            {
              path: 'security',
              name: 'security',
              component: () => import('./components/profile/security/security.vue')
            }, 
            {
              path: 'transaction',
              name: 'transaction',
              component: () => import('./components/profile/transaction/transaction.vue')
            }, 
            {
              path: 'activity',
              name: 'activity',
              component: () => import('./components/profile/activity/activity.vue')
            }
          ]
        }
      ]
    }
  ]
})
