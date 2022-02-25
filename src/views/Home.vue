<template>
<div class="app">
  <body>
<h3>Welcome to the Cookie Run Wish Simulator!</h3>
  <!-- <h2 style="font-family: CRK">CookieRun Kingdom Wish Simulator</h2> -->
    <div class="container">
      <img src="../assets/attackbg.jpg" alt="standard banner" class="banner" >
      <button @click="popup = true" class="button1" >Probabilites</button>
    </div>
      <img src="../assets/draw10.jpg" alt="draw10" class="draw10" id="draw10" @click="$router.push({name: 'Result', query: { result: JSON.stringify(roll(10))} })">
      <img src="../assets/draw1.jpg" alt="draw1" class="draw1" @click="$router.push({name: 'Result', query: { result: JSON.stringify(roll(1))} })">
    <div v-if="popup" id="myModal" class="modal">
      <div class="modal-content">
        <span @click="popup = false" class="close">&times;</span>
        <p class='p1' style="font-family: CRK">Cookies Probabilities</p>
        <img class="percent" src="../assets/proabilities.jpg" alt="probabilities">
      </div>
    </div>
  </body>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import * as cookies from '@/assets/scraper_output/cookies.json';
import * as rarities from '@/assets/scraper_output/cookies_rarity.json';
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
      return Math.round(Math.random()* 100000)/1000
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

          // // manipulate cookie chances here:
          // if(cookie.name === "Tea Knight Cookie") {
          //   rarity.cookie = 100
          //   rarity.soulstone = 100
          // }
          // //end

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
<style scoped>

h3{
  font-family: CRK;
  text-align: center;
  text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
  color: white;
}


@font-face {
  font-family: 'CRK';
  src: url('/crk_font/cookierun_regular-webfont.woff');
}

h2{
  text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
  color: white;
  text-align: center;
}

#myModal {
  display: block;
}

.modal {
  display: none; 
  position: fixed; 
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
}

.p1{
  color: black;
  font-family: 'Lucida Sans';
  font-size: 30px;
  text-align: center;
}

.modal-content {
  background-color: white;
  margin: auto;
  padding: 20px;
  border: 2px solid black;
  width: 80%;
  border-radius: 25px;
}

.close {
  color: grey;
  float: right;
  font-size: 30px;
  font-weight: bold;
  display:block;
}

.close:hover,
.close:focus {
  color: rgb(104, 107, 109);
  text-decoration: none;
  cursor: pointer;
}

.button1{
  background: transparent;
  color: white;
  filter: alpha(opacity=90);
  font-family: 'Lucida Sans';
  font-size: 18px;
  border-radius: 20px;
  width:120px;
  position: absolute;
  top: 20px;
  right: 110px;
  filter: drop-shadow(4px 4px 4px #828282);
  text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
}

.percent{
width: 100%;
border-radius: 20px;
}

.banner{
  height: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
}
#borderbanner { 
  border: 10px solid transparent;
  padding: 5px;
  border-image: url(../assets/border3.png) 30 round;
}

.container {
  position: relative;
}

.draw1{
  border-radius: 25px;
  float: right;
  border: none !important;
  z-index:-1;
  width: 180px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.draw10{
  border-radius: 25px;
  float: right;
  border: none !important;
  z-index: -1;
  margin-right: 50px;
  width: 180px;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
