const TokenKey = 'access_token'

export function getToken() {
  return localStorage.getItem(TokenKey) && localStorage.getItem(TokenKey) != 'undefined'
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}
