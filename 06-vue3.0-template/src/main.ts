import { createApp } from 'vue';
import App from './App.vue';
// 引入重置样式
import "./styles/reset.scss";

// element-plus
import ElementPlus from 'element-plus';
import "element-plus/dist/index.css";



// pinia
import { createPinia } from 'pinia';
const pinia = createPinia();


// vue-router

import router from './router';


// 
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.use(MotionPlugin)
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
