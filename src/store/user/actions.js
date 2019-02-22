import {
  errorHandler
} from '@/utils'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import user from '@/api/user'

export const login = ({
  commit
}, payload) =>
  user.login(
    (data) => {
      setToken(data.data.accessToken)
    },
    e => errorHandler(e),
    payload,
  )

export const userHome = ({
  commit
}, payload) =>
  user.userHome(
    (res) => {
      console.log('orgs..', res.data.data.orgs)
      commit('setUser', res.data.data.user)
      commit('setOrgs', res.data.data.orgs)
    },
    e => errorHandler(e),
    payload,
  )

export const logout = ({
  commit
}, payload) =>
  user.logout(
    (data) => {
      removeToken()
    },
    e => {
      removeToken()
      // errorHandler(e)
    },
    payload,
  )
