import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    startTimeStamp: new Date().getTime(),
    morning : {
    }
  },
  getters: {
    day(state){
    // To calculate the time difference of two dates
      let Difference_In_Time = new Date().getTime() - state.startTimeStamp

    // To calculate the no. of days between two dates
      let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

      return  Math.floor(Difference_In_Days)
    }
  },
  mutations: {
    updateStartDate(state, val){
      state.startTimeStamp = val
    }
  },
  actions: {
  },
  modules: {
  }
})
