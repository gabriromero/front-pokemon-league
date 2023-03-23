import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router'
import Select2 from 'vue3-select2-component'

createApp(App).use(router).mount('#app')

App.component('Select2', Select2)
