import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faAngleDown, faArrowUp,faArrowRight, faCheck, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import {faUser, faFileLines, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faLinkedin, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'


library.add(faInstagram, faLinkedin, faFacebook, faTwitter,faAngleDown,faArrowUp,faArrowRight,faUser,faFileLines, faCheck, faSortUp, faSortDown, faCalendar)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
