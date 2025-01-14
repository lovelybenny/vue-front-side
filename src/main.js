import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'amfe-flexible'
// import 'vant/lib/index.css';
// import { Button } from 'vant';
import './assets/icon/font_inoi7rxcu4j/iconfont.css'
import './assets/icon/font_alszihkajvj/iconfont.css'

// Vue.use(Button);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
