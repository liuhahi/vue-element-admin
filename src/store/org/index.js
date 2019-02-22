import * as actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  orgName: '',
  orgType: '',
  orgList: []
}

export default {
  state,
  mutations,
  actions,
  getters
}
