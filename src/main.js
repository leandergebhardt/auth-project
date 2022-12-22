import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { Frontegg } from '@frontegg/vue';

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
});


Vue.use(Frontegg, {
  contextOptions: {
    baseUrl: 'https://app-4grgdxxwlkqb.frontegg.com',
    clientId: 'ed8c5447-1648-4d76-ba14-b3146292716e'
  },
  // Replace this with your app logo 👇
  headerImage: 'https://fronteggprodeustorage.blob.core.windows.net/public-vendor-assets/0687d858-633d-4d08-aef8-558a2b036b30%2Fassets%2Flogo-3dea5c4c-9302-41aa-b711-6304ca29cfa5.png',
  router,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
