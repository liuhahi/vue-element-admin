export default {
  setOrg(state, payload) {
    state.orgName = payload.name
    state.orgType = payload.type
  },
  setOrgList(state, payload) {
    state.orgList = payload.data
  }
}
