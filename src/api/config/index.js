export const API_BASE = process.env.API_BASE

export const CONFIG = () => {
  const token = localStorage.getItem('access_token')
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }
}

export const UNLOGIN_CONFIG = {
  headers: {
    'Content-Type': 'application/json'
  }
}
