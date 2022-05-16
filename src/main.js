import Vue from 'vue'
import App from './App.vue'

const bootstrap = require('bootstrap')
Vue.use(bootstrap)

/* Importazione font */
import "@fontsource/kristi";
import "@fontsource/dm-serif-display";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faCartShopping, faArrowLeft, faArrowRight, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faAmazon, faApple, faYoutube} from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(faCartShopping, faArrowLeft, faArrowRight, faAngleRight, faFacebookF, faInstagram, faLinkedinIn, faTwitter, faAmazon, faApple, faYoutube) 

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app')
