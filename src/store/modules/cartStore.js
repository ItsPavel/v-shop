export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    inCart: (state) => (id) => state.items.some((item) => item.id == id),
    itemsDetailed: (state, getters, rootState, rootGetters) => {
      return state.items.map((item) => {
        let product = rootGetters["productsStore/oneProduct"](item.id);
        return { ...product, cnt: item.cnt };
      });
    },
    lengthCart: (state, getters) =>
      getters.itemsDetailed.reduce((acc, item) => item.cnt + acc, 0),
    total: (state, getters) =>
      getters.itemsDetailed.reduce(
        (acc, item) => acc + item.price * item.cnt,
        0
      ),
  },
  mutations: {
    add(state, id) {
      state.items.push({ id, cnt: 1 });
      localStorage.setItem("cart", JSON.stringify([...state.items]));
    },
    load(state, hasProducts) {
      if (hasProducts) {
        state.items = JSON.parse(localStorage.getItem("cart")) || [];
      } else {
        state.items = [];
      }
    },
    remove(state, id) {
      state.items = state.items.filter((item) => item.id != id);
      localStorage.setItem("cart", JSON.stringify([...state.items]));
    },
    removeAll(state) {
      state.items = [];
    },
    setCnt(state, { id, cnt }) {
      let item = state.items.find((item) => item.id == id);
      item.cnt = cnt;
    },
  },
  actions: {
    add({ commit, getters }, id) {
      if (!getters.inCart(id)) {
        commit("add", id);
      }
    },
    remove({ commit, getters }, id) {
      if (getters.inCart(id)) {
        commit("remove", id);
      }
    },
    removeAll({ commit }) {
      commit("removeAll");
    },
    setCnt({ commit, getters }, { id, cnt }) {
      if (getters.inCart(id)) {
        let validCnt = Math.max(cnt, 1);
        commit("setCnt", { id, cnt: validCnt });
      }
    },
    load({ commit, rootGetters }) {
      commit("load", rootGetters["productsStore/hasLoaded"]);
    },
  },
};
