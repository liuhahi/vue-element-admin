import * as actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  avatarURL: null,
  orgID: null,
  email: '',
  id: null,
  name: null,
  isStaff: null,
  isLocalAccount: null,
  providers: [],
  user: {},
  orgs: []
}

export default {
  state,
  mutations,
  actions,
  getters
}
