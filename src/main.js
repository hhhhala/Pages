import { createApp } from 'vue'
// 引入全局css样式
import "@/style/style.css";
// 引入 pinia
import { createPinia } from 'pinia';
import 'element-plus/dist/index.css'
import App from './App.vue'


const app = createApp(App)
const pinia = createPinia();
app.use(pinia)
app.mount('#app')
