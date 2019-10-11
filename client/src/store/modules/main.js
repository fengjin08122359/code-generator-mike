import sdk from '../../sdk'

const state = {
  displayBorderColor: '#dbdbdb'
}
const getters = {
}
const mutations = {
  
}
const actions = {
  init () {
    sdk.init()
  },
  setDisplayBorderColor ({state}, color) {
    state.displayBorderColor = color
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}