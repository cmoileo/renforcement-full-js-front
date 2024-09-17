<template>
    <app-header />
      <router-view />
    <app-footer />
</template>

<script>
import {createRouter, createWebHistory} from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppHome from './pages/AppHome.vue'
import AppAbout from './pages/AppAbout.vue'
import AppContact from './pages/AppContact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppHome
    },
    {
      path: '/about',
      component: AppAbout
    },
    {
      path: '/contact',
      component: AppContact
    }
  ]
})

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  setup() {
    return {
      router
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>