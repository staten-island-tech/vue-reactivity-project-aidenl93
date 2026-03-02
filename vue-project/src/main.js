import { createApp } from 'vue'
import App from './views/shoeshop.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
