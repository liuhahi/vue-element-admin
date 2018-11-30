import axios from 'axios'
import {
  API_BASE,
  CONFIG,
  UNLOGIN_CONFIG
} from './config'

export default {
  createOrg(cb, errorCb, payload) {
    return axios
      .post(
        `${API_BASE}/pages`,
        JSON.stringify({
          page: 'create-org',
          action: 'create',
          data: {
            name: payload.name,
            type: payload.type
          }
        }),
        CONFIG(),
      )
      .then(response => cb(response))
      .catch(e => errorCb(e))
  },
  getOrgs(cb, errorCb, payload) {
    return axios
      .post(
        `${API_BASE}/authentication`,
        JSON.stringify(payload),
        UNLOGIN_CONFIG,
      )
      .then(response => cb(response))
      .catch(e => errorCb(e))
  },
  deleteOrg(cb, errorCb, payload) {
    console.log('config', CONFIG())
    return axios
      .post(
        `${API_BASE}/pages`,
        JSON.stringify(payload),
        CONFIG(),
      )
      .then(response => cb(response))
      .catch(e => errorCb(e))
  }
}
