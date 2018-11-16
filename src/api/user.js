import axios from 'axios'
import { API_BASE, CONFIG, UNLOGIN_CONFIG } from './config'

export default {
  login(cb, errorCb, payload) {
    console.log('api base', API_BASE)
    return axios
      .post(
        `${API_BASE}/authentication`,
        JSON.stringify(payload),
        UNLOGIN_CONFIG,
      )
      .then(response => cb(response))
      .catch((e) => {
        errorCb(e)
      })
  }
}
