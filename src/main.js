import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/store'; 
import router from '@/router/router';
import './assets/multivue.css'
import 'toastr/build/toastr.min.css';
// Import FontAwesome core and the Vue FontAwesome component
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import the individual icon sets
import { fas } from '@fortawesome/free-solid-svg-icons';  // Solid icons
import { far } from '@fortawesome/free-regular-svg-icons';  // Regular icons
import { fab } from '@fortawesome/free-brands-svg-icons';  // Brand icons

// Add the icons to the library
library.add(fas, far, fab);
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(store)

app.mount('#app')
