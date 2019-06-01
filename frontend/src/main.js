import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App';

import SignUp from './components/SignUp';
import HomePage from './components/Homepage';
import ChatRoom from './components/ChatRoom';
import ChatList from './components/ChatList';

Vue.config.productionTip = false;
Vue.config.$http = Axios;
Vue.use(Buefy);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/ChatRoom/:id',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: 'ChatList',
      component: ChatList
    },
    {
      path: '/',
      component: HomePage
    }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
