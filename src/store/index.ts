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
      // if previous soulstone data exist of a specific cookie add the new soulstone no. to the original soulstone no.
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
    //end
  },
  actions: {
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin] //store plugin to save results
})
