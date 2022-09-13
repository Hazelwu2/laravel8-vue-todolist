require('./bootstrap');

import { createApp } from 'vue'
import App from './vue/app.vue'

createApp({
    components: {
        App
    },
}).mount('#app')
