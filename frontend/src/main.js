import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App';
import VueChatScroll from 'vue-chat-scroll'

import SignUp from './components/SignUp';
import HomePage from './components/Homepage';
import ChatPlace from './components/ChatPlace';
import ChatList from './components/ChatList';
import Post from './components/Post';

Vue.config.productionTip = false;
Vue.config.$http = Axios;
Vue.use(Buefy);
Vue.use(VueRouter);
Vue.use(VueChatScroll)
let requiresAuth = false;

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/chat',
      name: 'ChatPlace',
      component: ChatPlace
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
