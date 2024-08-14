export function setToken(token: string) {
  localStorage.setItem('notification/token', token);
}

export function getToken() {
  return localStorage.getItem('notification/token');
}
