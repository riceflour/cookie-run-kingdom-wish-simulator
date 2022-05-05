<template>
<div class="app">
  <body>
<h3>Welcome to the Cookie Run Wish Simulator!</h3>
    <div class="container">
      <img src="../assets/images/Lost_kingdom-update.jpg" alt="standard banner" class="banner" >
      <button @click="popup = true" class="button1" >Probabilites</button>
    </div>
      <img src="../assets/images/draw10.jpg" alt="draw10" class="draw10" id="draw10" @click="$router.push({name: 'Result', query: { result: JSON.stringify(roll(10))} })">
      <img src="../assets/images/draw1.jpg" alt="draw1" class="draw1" @click="$router.push({name: 'Result', query: { result: JSON.stringify(roll(1))} })">
    <div v-if="popup" id="myModal" class="modal">
      <div class="modal-content">
        <span @click="popup = false" class="close">&times;</span>
        <p class='p1' style="font-family: CRK">Cookies Probabilities</p>
        <img class="percent" src="../assets/images/proabilities.jpg" alt="probabilities">
      </div>
    </div>
  </body>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

let cookies = [] as Character[];
import * as _cookies from '@/assets/scraper_output/cookies.json';
if ((_cookies as any).default) {
  cookies = (_cookies as any).default; 
}

let rarities = [] as RarityChances[];
import * as _rarities from '@/assets/scraper_output/cookies_rarity.json';
if ((_rarities as any).default) {
  rarities = (_rarities as any).default; 
}

import { Result } from '@/types/Result'
import { Character } from '@/bindings/Character'
import { CharacterType } from '@/bindings/CharacterType';
import { RarityChances } from '@/bindings/RarityChances';
import { directive } from 'vue/types/umd';


@Component({
  components: {

  },
  data() {
    return {
      import :{CharacterData} , from: '../../character.ts',
      popup: false,
    }
  },
  mounted() {
    console.log(cookies)
  },
  methods: {
    clicked() {
      alert("hi!!!")
    },
    random() {
      return Math.round(Math.random()* 100000)/1000 // the random number accounts for the roll
    },
    roll(amountOfRolls: number = 1) {
      const tmpReturn = new Result();
      const rolls: number[] = [];
      for(let i = 0; i < amountOfRolls; i++){     // if roll 10 then do this 10 times
        const something = (this as any).random()
        rolls.push(something);
      };
      rolls.sort((a:number, b: number) => {
        return b-a
      })

      const tups: Array<[Character, RarityChances]> = [];
      (cookies as Character[]).forEach((cookie)=> {
        var tup: [Character, RarityChances] = [cookie, (rarities as RarityChances[]).find(e => e.rarity == cookie.rarity)!]
        tups.push(tup)
      })
        
        rolls.forEach( roll => {
        let sum = 0;
        (cookies as Character[]).every(cookie => {
          var rarity = (rarities as RarityChances[]).find(e => e.rarity == cookie.rarity)!
          // adding sum of probabilities to see where the random number lies 
          sum += rarity.cookie
          if (roll <= sum) {
            tmpReturn.cookies.push(cookie)
            return false;
          }           
          // end

          sum += rarity.soulstone
          if (roll <= sum) {
            tmpReturn.soulstones.push(cookie)
            return false;
          }

          return true;
        })
      })
      return tmpReturn;
    }
  },
})

export default class Home extends Vue {}
window.addEventListener('load', function () {
  })
</script>
<style scoped src="@/assets/homestylesheet.css">
</style>
