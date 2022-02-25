<template>
<body>
<div class="app">
<div class="topnav">
  <li class="item" v-for="route in routes" :key="route.path">
      <router-link :to="route.path" class="bar-item-button"> {{route.name}}</router-link>
  </li>
</div>
  <!-- <button id="idvar" @click="clicked" >Draw 10</button>  -->
  <router-view/>
</div>
</body>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import * as cookies from '@/assets/scraper_output/cookies.json';
import * as rarities from '@/assets/scraper_output/cookies_rarity.json';
import { Character } from '@/bindings/Character'
import { CharacterType } from './bindings/CharacterType';
import { RarityChances } from './bindings/RarityChances';
import { directive } from 'vue/types/umd';

// 
@Component({
  components: {

  },
  computed:{
  },
  data() {
    return {
      import :{CharacterData} , from: '../../character.ts',
      popup: true,
      routes: [
        {
          path: '',
          name: 'Cookie Run Kingdom Wish Simulator',
        },
        {
          path: '/',
          name: 'Home',
        },
        {
          path: '/featured',
          name: 'Featured',
        }
      ]
    }
  },
  mounted() {  
    // [ ...Array(10) ].forEach((e, i) => console.log(Math.round((Math.random() * 10000))/100));
    
  },
  methods: {
    clicked() {
      alert("Error 502")
    },
        roll() {
      return Math.round(Math.random()* 100000)/1000
    }
  }
})



export default class Home extends Vue {}
</script>

<style lang="scss" scoped>

body {
  background-image: url(./assets/genshinbg.jpg);
  height: 640px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 0;
  margin: 0;
}

h2{
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

.topnav {
  li {
    list-style-type: none;
  }
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  padding:0;
}

.topnav a {
  float: left;
  display: flex;
  justify-content: center;
  // align-items: center;
  color: #000000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  height: 35px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.draw1{
  border-radius: 25px;
  float: right;
  border: none !important;
  z-index:-1;
  width: 180px;
  margin-right: 10px;
  margin-top: 20px;
}
.draw10{
  border-radius: 25px;
  float: right;
  border: none !important;
  z-index: -1;
  width: 180px;
  margin-right: 10px;
  margin-top: 20px;
}
</style>