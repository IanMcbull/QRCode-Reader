import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
import router from './router'

createApp(App).use(Toast).use(router).mount('#app')
