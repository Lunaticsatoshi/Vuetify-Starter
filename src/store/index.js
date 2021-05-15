import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    startTimeStamp: new Date().getTime(),
    currentDay: 0,
    morning : {
      oxygen:  [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      Gargles: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      Medicine: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      Exercises: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      Temperature: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      Pressure: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      pulse: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      Breakfast: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]

    },
    gratitude:{
      gratitudeText: [
          '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ],
      gratitudeCheck1:  [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      gratitudeCheck2: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    journal:{
      journalText: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ],
      journalCheck1:  [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      journalCheck2: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    }
  },
  getters: {
    getField,
    day(state){
    // To calculate the time difference of two dates
      let Difference_In_Time = new Date().getTime() - state.startTimeStamp

    // To calculate the no. of days between two dates
      let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

      return  Math.floor(Difference_In_Days)
    }
  },
  mutations: {
    updateField,
    updateOxygen(state, val){
      state.morning.oxygen[val.day] = val.value
    },
    updateGargles(state, val){
      state.morning.Gargles[val.day] = val.value
    },

    updateGratitudeText(state, val){
      state.gratitude.gratitudeText[val.day] = val.value
    },
    updateGratitudeCheck1(state, val){
      state.gratitude.gratitudeCheck1[val.day] = val.value
    },
    updateGratitudeCheck2(state, val){
      state.gratitude.gratitudeCheck2[val.day] = val.value
    },

    updateJournalText(state, val){
      state.journal.journalText[val.day] = val.value
    },
    updateJournalCheck1(state, val){
      state.journal.journalCheck1[val.day] = val.value
    },
    updateJournalCheck2(state, val){
      state.journal.journalCheck2[val.day] = val.value
    },
    updateStartDate(state, val){
      state.startTimeStamp = val
    }
  },
  actions: {
      updateCurrentDay({state}, val){
        state.currentDay = val
      },
  },
  modules: {
  }
})
