<template>
<div class="">
  <div class="app">
    <div class="topnav">
      <li class="item" v-for="route in routes" :key="route.path">
        <router-link :to="route.path" class="bar-item-button"> {{route.name}}</router-link>
      </li>
    </div>
    <router-view/>
  </div>
</div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
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
          path: '/About',
          name: 'Cookie Run Kingdom Wish Simulator',
        },
        {
          path: '/',
          name: 'Home',
        },
        {
          path: '/Featured',
          name: 'Featured',
        },
        // {
        //   path: '/history',
        //   name: 'History',
        // }
      ]
    }
  },
  mounted() {  
    
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

.bg {
  background-image: url(./assets/images/animesky.jpg);
  height: 565px; 
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
  position: relative;
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
  color: #000000;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  font-size: 17px;
  height: 20px;
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