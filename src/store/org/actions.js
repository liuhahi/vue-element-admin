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

