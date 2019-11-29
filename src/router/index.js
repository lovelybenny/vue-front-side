import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {Row, Col} from 'vant';
import { Icon } from 'vant';
import { NavBar } from 'vant';
import { Lazyload } from 'vant';
import { NumberKeyboard } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Search } from 'vant';
import { Grid, GridItem } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.use(VueRouter);
Vue.use(Row).use(Col);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Lazyload);
Vue.use(Field).use(NumberKeyboard);
Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(Search);
Vue.use(Grid).use(GridItem);
Vue.use(Tab).use(Tabs);


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/changenumber',
    name: 'changenumber',
    component: () => import('../views/ChangeNumber.vue')
  },
  {
    path: '/encyclopedia',
    name: 'encyclopdia',
    component: () => import('../views/Encyclopedia.vue')
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import('../views/Payments.vue')
  },
  {
    path: '/paymentsdetails',
    name: 'paymentsdetails',
    component: () => import('../views/PaymentsDetails.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/orderdetails',
    name: 'orderdetails',
    component: () => import('../views/OrderDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
