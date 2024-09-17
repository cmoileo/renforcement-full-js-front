import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppHome from './pages/AppHome.vue'
import AppAbout from './pages/AppAbout.vue'
import AppContact from './pages/AppContact.vue'
import './assets/style/global.css'
import './assets/style/reset.css'

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

const app = createApp(App)
app.component('AppHeader', AppHeader)
app.component('AppFooter', AppFooter)
app.use(router)
app.mount('#app')