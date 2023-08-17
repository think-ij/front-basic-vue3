import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// plugin
import plugins from './plugins'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugins.vuetify)

app.mount('#app')
