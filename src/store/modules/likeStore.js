export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    inLike: (state) => (id) => state.items.some((item) => item.id == id),
    itemsDetailed: (state, getters, rootState, rootGetters) => {
      return state.items.map((item) => {
        let product = rootGetters["productsStore/oneProduct"](item.id);
        return { ...product };
      });
    },
    lengthLike: (state) => state.items.length,
  },
  mutations: {
    add(state, id) {
      state.items.push({ id });
      localStorage.setItem("like", JSON.stringify([...state.items]));
    },
    load(state, hasProducts) {
      if (hasProducts) {
        state.items = JSON.parse(localStorage.getItem("like")) || [];
      } else {
        state.items = [];
      }
    },
    remove(state, id) {
      state.items = state.items.filter((item) => item.id != id);
      localStorage.setItem("like", JSON.stringify([...state.items]));
    },
  },
  actions: {
    addLike({ commit, getters }, id) {
      if (!getters.inLike(id)) {
        commit("add", id);
      }
    },
    removeLike({ commit, getters }, id) {
      if (getters.inLike(id)) {
        commit("remove", id);
      }
    },
    load({ commit, rootGetters }) {
      commit("load", rootGetters["productsStore/hasLoaded"]);
    },
  },
};
