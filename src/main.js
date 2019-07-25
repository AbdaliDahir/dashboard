import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import router from './router'
import store from './store'
import 'vue-chartjs'
import 'iview/dist/styles/iview.css'
import locale from 'iview/dist/locale/en-US';

Vue.use(iView, {locale: locale});
Vue.use(iView);

/**Loading Bar  **/
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
