export const state = () => ({ loggedIn: false });

export const getters = {
  authenticated(state) {
    return state.loggedIn;
  },

  user(state) {
    return state.user;
  }
};
