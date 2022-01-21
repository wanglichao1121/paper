import { createStore } from 'vuex'

export default createStore({
  state: {
    paperSelection: {
      curStep: 0
    }
  },
  mutations: {
    nextStep(state){
      state.paperSelection.curStep++;
    },
    prevStep(state){
      state.paperSelection.curStep--;
    }
  },
  actions: {
  },
  modules: {
  }
})
