import * as actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  orgList: [],
  orgName: '',
  orgType: ''
}

export default {
  state,
  mutations,
  actions,
  getters
}
