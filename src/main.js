import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import News from './components/News.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/news', component: News},
  {path: '/', component: Home},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});