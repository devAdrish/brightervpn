const AUTH_TOKEN = "authToken";

export const setAuthToken = (token: string) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const getAuthToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return token;
};

export const removeAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};
