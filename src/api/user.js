import axios from 'axios'
import {
  API_BASE,
  CONFIG,
  UNLOGIN_CONFIG
} from './config'

export default {
  login(cb, errorCb, payload) {
    return axios
      .post(
        `${API_BASE}/authentication`,
        JSON.stringify(payload),
        UNLOGIN_CONFIG,
      )
      .then(response => cb(response))
      .catch(e => errorCb(e))
  },
  userHome(cb, errorCb, payload) {
    console.log('config', CONFIG())
    return axios
      .post(
        `${API_BASE}/pages`,
        JSON.stringify({
          page: 'user-home',
          action: 'open'
        }),
        CONFIG(),
      )
      .then(response => cb(response))
      .catch(e => errorCb(e))
  },
  logout(cb, errorCb, payload) {
    return axios
      .post(
        `${API_BASE}/authentication`,
        JSON.stringify(payload),
        UNLOGIN_CONFIG,
      )
      .then(response => cb(response))
      .catch(e => errorCb(e))
  }
}
