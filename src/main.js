import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'bootstrap'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap JS (opcional, apenas se precisar de funcionalidades JavaScript)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
 
app.use(router)
app.mount('#app');
 

createApp(App).mount('#app')