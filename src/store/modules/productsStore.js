export default {
  namespaced: true,
  state: {
    products: [],
    hasLoaded: true,
    limit: 6,
  },
  getters: {
    hasLoaded: (state) => state.hasLoaded,
    visibleProducts: (state) => state.products.slice(0, state.limit),
    oneProduct: (state) => (id) => state.products.find((item) => item.id == id),
  },
  mutations: {
    setItems(state, products) {
      state.products = products;
    },
    loadMore(state) {
      state.limit += 3;
    },
    err(state, status) {
      state.hasLoaded = false;
      console.log("Ошибка:" + status);
    },
  },
  actions: {
    async load({ commit }) {
      let response = await fetch(`http://localhost:3000/products`);
      if (response.ok) {
        let products = await response.json();
        commit("setItems", products);
      } else {
        commit("err", response.status);
      }
    },
    loadMore({ commit, state }) {
      if (state.limit < state.products.length) {
        commit("loadMore");
      }
    },
  },
};
