import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-persistedstate-plugin';
//注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const persist=createPersistedState();
const pinia =createPinia();
pinia.use(persist)
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
createApp(App).use(ElementPlus).use(router).use(pinia).mount('#app')
