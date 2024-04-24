import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(ElementPlus).use(router).mount('#app')
