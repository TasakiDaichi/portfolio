import { createApp } from 'vue'

// Vuetify //
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Profile from './components/profile.vue'

// Components
import App from './App.vue'

const vuetify = createVuetify({ 
  components, 
  directives, 
  icons: { 
    defaultSet: 'mdi', 
    aliases, 
    sets: { 
      mdi, 
    }, 
  }, 
}) 
const app = createApp(App)
app.component('Profile', Profile);
app.use(vuetify)
app.mount('#app') 