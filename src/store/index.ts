import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { StoredResult } from '@/types/Result'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    soulstones: [] as StoredResult[]
  },
  mutations: {
    addSoulstones(state, input: StoredResult) {
      let foundresult = state.soulstones.find((e) => {
        return e.name == input.name
      })
      if (foundresult) {
        foundresult.soulstones += input.soulstones
      }
      else {
        state.soulstones.push(input)
      }
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
