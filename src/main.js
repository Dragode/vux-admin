// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import App from './App.vue'
import Home from './components/Dispatcher.vue'
import AddGoods from './components/AddGoods.vue'
import OrderManage from './components/OrderManage.vue'
import UserManage from './components/UserManage.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/addGoods',
    component: AddGoods
  },
  {
    path: '/orderManage',
    component: OrderManage
  },
  {
    path: '/userManage',
    component: UserManage
  }
];

const router = new VueRouter({
  routes
});

FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box');
