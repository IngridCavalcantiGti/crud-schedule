import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VueCompositionAPI from '@vue/composition-api';
import 'ant-design-vue/dist/antd.css';
import {
  Button, Input, Table, Modal,
} from 'ant-design-vue';
import VueMask from 'v-mask';
import App from './App.vue';
import router from './router';

Vue.use(VueMask);
Vue.use(VueCompositionAPI);
Vue.use(Button);
Vue.use(Input);
Vue.use(Table);
Vue.use(Modal);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

