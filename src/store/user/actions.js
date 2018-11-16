import { errorHandler } from '@/utils'
import { getToken, setToken, removeToken } from '@/utils/auth'
import user from '@/api/user'

export const login = ({ commit }, payload) =>
  user.login(
    (data) => {
      setToken(data.data.accessToken)
    },
    e => errorHandler(e),
    payload,
  )

export const userHome = ({ commit }, payload) =>
  user.userHome(
    (data) => {
      commit('setUser', data.user)
    },
    e => errorHandler(e),
    payload,
  )
