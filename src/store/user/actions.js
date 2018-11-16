import { errorHandler } from '@/utils'
import user from '@/api/user'

export const login = ({ commit }, payload) =>
  user.login(
    (data) => {
      console.log('access_token in actions', data.token)
      localStorage.setItem('access_token', data.token)
    },
    (e) => {
      throw e
    },
    payload,
  )
