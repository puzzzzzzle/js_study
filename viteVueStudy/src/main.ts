import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import * as $ from 'jquery'

//@ts-ignore
window.jQuery = window.$ = $

createApp(App).mount('#app')
