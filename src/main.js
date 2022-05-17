import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri: 'https://alive-beagle-22.hasura.app/v1/graphql'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  vuetify,
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
