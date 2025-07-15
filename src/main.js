import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import App from './App.vue'

// ������д�õ�·��
import router from './utils/router'

const app = createApp(App)

// ���� router
app.use(router)

app.mount('#app')
