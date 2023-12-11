export default {
  namespaced: true,
  state: {
    isCartModalOpen: false,
    isLikesModalOpen: false,
  },
  mutations: {
    openModal(state, type) {
      switch (type) {
        case "cart":
          state.isCartModalOpen = true;
          break;
        case "likes":
          state.isLikesModalOpen = true;
          break;
        default:
      }
    },
    closeModal(state, modal) {
      switch (modal) {
        case "cart":
          state.isCartModalOpen = false;
          break;
        case "likes":
          state.isLikesModalOpen = false;
          break;
        default:
      }
    },
  },
  actions: {
    open({ commit }, type) {
      commit("openModal", type);
    },
    close({ commit }, type) {
      commit("closeModal", type);
    },
  },
};
