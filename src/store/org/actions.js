import {
  errorHandler
} from '@/utils'
import org from '@/api/org'

export const createOrg = ({
  commit
}, payload) =>
  org.createOrg(
    (data) => {
      console.log('response data', data)
      commit('setOrg', data.data)
    },
    e => errorHandler(e),
    payload,
  )

export const joinOrg = ({
  commit
}, payload) =>
  org.joinOrg(
    (data) => {
      console.log('response data', data)
      commit('setOrg', data.data)
    },
    e => errorHandler(e),
    payload,
  )

export const getOrgs = ({
  commit
}, payload) =>
  org.getOrgs(
    (data) => {
      console.log('response data', data)
      commit('setOrgList', data.data)
    },
    e => errorHandler(e),
    payload,
  )

