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

let requiresAuth = false;

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/ChatRoom/:id/:receiver_id',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/signup',
      component: SignUp,
      name: 'signup'
    },
    {
      path: '/ChatList',
      component: ChatList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      component: HomePage,
      name: 'root'
    },
    {
      path: '/annonces',
      component: Post,
      name: 'post'
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === '/ChatList') {
    if (!localStorage.getItem('access_token')) {
      next({
        path: '/'
      });
    } else {
      requiresAuth = true;
      next();
    }
  } else {
    next();
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
