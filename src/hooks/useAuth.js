import { apiClient } from "../apis/apiClient";

export const useAuth = () => {
  const setAuth = (jwt) => {
    if (jwt) {
      apiClient.userToken = jwt;
      localStorage.setItem("access_token", jwt);
    } else {
      apiClient.userToken = undefined;
      localStorage.removeItem("access_token");
    }
  };
  return { setAuth };
};
