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
        `${API_BASE}/orgs`,
        JSON.stringify({
          name: payload.name
        }),
        CONFIG(),
      )
      .then(response => cb(response))
      .catch(e => errorCb(e))
  },
  joinOrg(cb, errorCb, payload) {
    return axios
      .post(
        `${API_BASE}/pages`,
        JSON.stringify({
          page: 'join-org',
          'action': 'apply-join',
          'data': {
            'org': payload.name
          }
        }),
        CONFIG(),
      )
      .then(response => cb(response))
      .catch(e => errorCb(e))
  },
  getOrgs(cb, errorCb, payload) {
    return axios
      .get(
        `${API_BASE}/orgs`,
        CONFIG(),
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
