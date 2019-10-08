import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Hello World from Vuex state management!',
    links: [
      'https://developer.mozilla.org',
      'https://dev.to',
      'https://github.com',
      'https://www.youtube.com',
    ],
  },
  mutations: {
    storeLink(state, link) {
      const url = 'https://' + link + '.com';
      state.links.push(url);
    },
  },
  actions: {
    storeLink(context, link) {
      context.commit('storeLink', link);
    },
  },
});
