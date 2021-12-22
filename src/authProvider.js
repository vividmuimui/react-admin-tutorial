const LOCAL_STORAGE_KEY = "username"

export const authProvider = {
  login: async (props) => {
    if (props.password === "test") {
      return Promise.reject()
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, props.username);
  },
  logout: async () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY)
  },
  checkError: async ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem(LOCAL_STORAGE_KEY)
      return Promise.reject()
    }
  },
  checkAuth: async () => {
    return localStorage.getItem(LOCAL_STORAGE_KEY) ? Promise.resolve() : Promise.reject()
  },
  getPermissions: async () => {}
};
