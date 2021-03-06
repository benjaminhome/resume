import _ from 'lodash'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import router from './routes'
import './scss/main.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.devtools = false;
Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VueAxios, axios)

Vue.material.registerTheme('default', {
  primary: 'blue',
})

const App = new Vue({
    el: 'div.app',
    data: function() {
      return {
        source: 'business-insider',
        news: []
      }
    },
    router,
});

Vue.axios.get("https://newsapi.org/v1/articles?source=" + App.source + "&apiKey=fb65bdd371b3443c8582ed2b3212368f").then((response) => {
  App.news = response.data.articles.slice(0, 5)
})