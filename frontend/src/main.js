import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'


Vue.config.productionTip = false
Vue.config.$http = Axios
Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app')