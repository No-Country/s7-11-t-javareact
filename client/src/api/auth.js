import jwtDecode from "jwt-decode";

export const TOKEN_KEY = "COMPRA_LISTO-TOKEN-SESSION";

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
}
export function decodeToken() {
  const token = getToken();
  if (token) {
    return jwtDecode(token);
  }
  return null;
}

export function userSessionTime() {
  const userData = decodeToken();
  const date = userData && new Date(userData.exp * 1000);
  return date;
}
export function AuthVerify() {
  const data = decodeToken();
  return data && data?.exp * 1000 > Date.now();
}
