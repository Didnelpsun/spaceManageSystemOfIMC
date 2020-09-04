const mutations = {
  SET_TOKEN (state, token) {
    if (typeof token === 'string') {
      state.token = token
    }
    if (typeof token === 'object') {
      try {
        state.token = token.token
      } catch (e) {
        console.log(e)
        state.token = null
      }
    }
  }
}

export default mutations
