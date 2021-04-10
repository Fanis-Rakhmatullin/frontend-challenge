import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cats: [],
    likedCats: [],
  },
  mutations: {
    ADD_CATS(state, catPics) {
      state.cats.push(...catPics);
    },
    ADD_LIKED_CATS_FROM_STORAGE(state, likedCats) {
      state.likedCats.push(...likedCats);
    },
    TOGGLE_CAT_LIKE(state, likedCat) {
      state.cats.forEach((cat) => {
        if (cat.id === likedCat.id) {
          // eslint-disable-next-line no-param-reassign
          cat.liked = !cat.liked;
        }
      });
    },
    ADD_LIKED_CAT(state, catToAdd) {
      state.likedCats.push(catToAdd);
    },
    REMOVE_CAT(state, catToRemove) {
      state.likedCats = state.likedCats.filter((cat) => cat.id !== catToRemove.id);
    },
  },
  actions: {
    async fetchCats({ commit }) {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20', {
          headers: {
            'x-api-key': 'ef6646b0-b46d-47d5-955a-6687b14819d8',
          },
        });
        const responseJson = await response.json();
        const data = responseJson.map((item) => ({
          id: item.id,
          url: item.url,
          liked: false,
        }));
        commit('ADD_CATS', data);
      } catch (error) {
        throw new Error('Произошла ошибка');
      }
    },
    likeCat({ commit, dispatch }, cat) {
      commit('TOGGLE_CAT_LIKE', cat);
      commit('ADD_LIKED_CAT', cat);
      dispatch('saveToLocalStorage');
    },
    unlikeCat({ commit, dispatch }, cat) {
      commit('TOGGLE_CAT_LIKE', cat);
      commit('REMOVE_CAT', cat);
      dispatch('saveToLocalStorage');
    },
    saveToLocalStorage({ state }) {
      window.localStorage.setItem('likedCats', JSON.stringify(state.likedCats));
    },
    fetchLikedCats({ commit }) {
      const likedCats = window.localStorage.getItem('likedCats');
      if (likedCats) commit('ADD_LIKED_CATS_FROM_STORAGE', JSON.parse(likedCats));
    },
  },
});
