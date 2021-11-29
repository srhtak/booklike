import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import appAxios from '@/utils/appAxios'
import store from './store'

import './assets/style.css'

import AppHeader from "@/components/Shared/AppHeader"
import AppBookmarkList from "@/components/Shared/AppBookmarkList"

const app = createApp(App);
app.component("AppHeader", AppHeader);
app.component("AppBookmarkList", AppBookmarkList);
app.use(router);
app.use(store)
app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$log = console.log;
app.mount("#app")
