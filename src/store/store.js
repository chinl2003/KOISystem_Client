
import { createStore } from 'vuex';
import { apiClient } from '@/api/axios';
import { toastSuccess, toastError, toastWarning } from '@/utils/toast';
import { saveToken, saveUserId, saveUserName, getToken, getUserId, getUserName, saveUserRole, getUserRole, saveUserFullName } from '@/utils/auth';

export default createStore({
  state: {
    currentUser: null,
    token: null,
    role: null
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setRole(state, role) {
      state.role = role;
    },
    logout(state) {
      state.currentUser = null;
      state.token = null;
      state.role = null;
      saveToken(null);
      saveUserId(null);
      saveUserName(null);
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
        console.log(password);
        const response = await apiClient.post('/api/auth/login', { username: email, password });
        if (response.status == 200) {
          const { userId, firstName, lastName, email, username, role, accessToken } = response.data.data;
          const user = { userId, firstName, lastName, email, username, role };
          commit('setUser', user);
          commit('setToken', accessToken);
          console.log(this.state.token)
          saveToken(accessToken);
          saveToken(accessToken);
          saveUserId(userId);
          saveUserFullName(firstName + " "+ lastName)
          saveUserName(username);
          saveUserRole(role);
          toastSuccess("Đăng nhập thành công!");
        } else {
          toastWarning(response.data.message);
        }

    },
    logout({ commit }) {
      commit('logout');
      saveToken(null);
      saveUserId(null);
      saveUserName(null);
      saveUserRole(null);
      saveUserFullName(null)
    },
    checkAuth({ commit }) {
      const token = getToken();
      const userId = getUserId();
      const userName = getUserName();
      const role = getUserRole();
      if (token && userId && userName) {
        commit('setToken', token);
        commit('setUser', { Id: userId, Username: userName, Role: role });
        commit('setRole', role);
      }
    },
  },
  getters: {
    isAuthenticated: state => !!state.token,
    currentUser: state => state.currentUser,
    userRole: state => state.role,
  },
});