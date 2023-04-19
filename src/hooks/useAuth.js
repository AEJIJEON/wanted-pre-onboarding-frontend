import { apiClient } from "../apis/apiClient";

export const useAuth = () => {
  const initializeAuth = () => {
    const jwt = localStorage.getItem("access_token");
    if (jwt) {
      apiClient.userToken = jwt;
    } else {
      apiClient.userToken = undefined;
    }
  };

  const setAuth = (jwt) => {
    if (jwt) {
      apiClient.userToken = jwt;
      localStorage.setItem("access_token", jwt);
    } else {
      apiClient.userToken = undefined;
      localStorage.removeItem("access_token");
    }
  };

  const authed = apiClient.userToken !== undefined;

  return { authed, setAuth, initializeAuth };
};
