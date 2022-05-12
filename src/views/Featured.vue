<template>

<div class="app">
  <!-- <h2 style="font-family: CRK">CookieRun Kingdom Wish Simulator</h2> -->
<div class="container">
  <img src="../assets/images/Cherryblossomcookie.jpg" alt="featured banner" class="banner" >
  <button @click="popup = true" class="button1" id="myBtn">Probabilites</button>
  <button @click="popup2 = true" class="button2" id="info">Information</button>
  <router-link to="/history" tag="button" class="homebtn">History</router-link>
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
<div v-if="popup2" id="myModal" class="modal">
  <div class="modal-content" style="font-family: CRK">
        <span @click="popup2 = false" class="closebtn">&times;</span>
        <!-- Disclaimers -->
        <p class='p1'>Info</p>
        <p>I am not affiliated with Devsisters,
           all assets in this application were taken from third party websites and
            some screenshotted from the Cookie Run itself(and other games like Genshin Impact).</p>
        <p>If you are someone from Mihoyo and would like this website taken down please email me <a href="mailto:zimo.luo1@gmail.com">here</a> 
        and I shall do so.</p>
        <p>All product names, logos, and brands are property of their respective owners in the South Korea and/or other countries.</p>
      </div>
    </div>
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
      popup2: false    // if you want it to always popup when you first open the page then change to true 
    }
  },
  mounted() {
    
  },
  methods: {
    random() {
      return Math.round(Math.random()* 100000)/1000 
      //the rolling process again, repeated since banner has different chances compared to the original one
    },
    roll(amountOfRolls: number = 1) {
      const tmpReturn = new Result();
      const rolls: number[] = [];
      for(let i = 0; i < amountOfRolls; i++){
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

          // manipulating cookie chances here:
          if(cookie.name === "Strawberry Cookie") {
            rarity.cookie = 1.440
            rarity.soulstone = 8.200
          }
          //end

          sum += rarity.cookie
          if (roll <= sum) {
            tmpReturn.cookies.push(cookie)
            return false;
          }

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

<style scoped src="@/assets/featured.css">
</style>


