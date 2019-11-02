import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';

import setupHighlight from './setupHighlight';

import App from './App';
import Home from './Home';
import routes from './routes/index';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);

setupHighlight(Vue);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    ...routes
  ]
});

new Vue({
  router,
  components: { App },
  template: '<app></app>'
}).$mount('#app');
