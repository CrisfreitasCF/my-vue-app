
// src/router/index.js

import HelloWorld from './components/HelloWorld.vue'
import { createRouter, createWebHistory } from'vue-router';

 
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  },


]
const router = createRouter({
    history: createWebHistory("localhost"),
      routes
    });

 
export default router 