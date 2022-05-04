<template>

<div class="app">

  <!-- <h2 style="font-family: CRK">CookieRun Kingdom Wish Simulator</h2> -->
<div class="container">
  <img src="../assets/images/Cherryblossomcookie.jpg" alt="featured banner" class="banner" >
  <button @click="popup = true" class="button1" id="myBtn">Probabilites</button>
  <button @click="popup2 = true" class="button2" id="info">Information</button>
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
      popup2: true    // always popup when you first open the page
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
          if(cookie.name === "Gingerbrave") {
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
<style scoped>
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

#info {
  display: block;
}

body {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin:5%;
  border:5%;
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
/* displays the probabilities of each rarity */
.info_card {
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
/* end */
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

.info-content {
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

.closebtn {
  color: grey;
  float: right;
  font-size: 30px;
  font-weight: bold;
  display:block;
}

.closebtn:hover,
.closebtn:focus {
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
  margin-top: 5%;
  cursor: pointer;
}
#borderbanner { 
  border: 10px solid transparent;
  padding: 5px;
  border-image: url(../assets/images/border3.png) 30 round;
}

.button2{
  background: transparent;
  color: white;
  filter: alpha(opacity=90);
  font-family: 'Lucida Sans';
  font-size: 18px;
  border-radius: 20px;
  width:120px;
  position: absolute;
  top: 60px;
  right: 110px;
  filter: drop-shadow(4px 4px 4px #828282);
  text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
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
