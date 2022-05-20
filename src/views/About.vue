<template>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body class="guide">
      <div v-if="popup" id="myModal" class="modal">
    <div class="modal-content" style="font-family: CRK">
          <span @click="popup = false" class="closebtn">&times;</span>
          <!-- Disclaimers -->
          <p class='p1'>Disclaimer</p>
          <p>I am not affiliated with Devsisters,
            all assets in this application were taken from third party websites and
              some screenshotted from the Cookie Run itself.</p>
          <p>If you are someone from Mihoyo and would like this website taken down please email me <a href="mailto:zimo.luo1@gmail.com">here</a> 
          and I shall do so.</p>
          <p>All product names, logos, and brands are property of their respective owners in the South Korea and/or other countries.</p>
          <p>This project is open source available <a href="https://github.com/riceflour/cookie-run-kingdom-wish-simulator/tree/af4b74b5930a964cbb51ef88ec5483d707fb02cd">here!</a></p>
        </div>
  </div>
<div class="about-section">

  <h1>User Guide</h1>
  <p>This is a roll simulator for the Cookie Run Kingdom gacha banner, featuring Cherry Blossom cookie and a standard banner. Users can click Standard at the top to go to the standard banner, or click Featured to go to the Cherry Blossom cookie banner.</p>
  <p>In the Standard page you can:</p>
    <p>Click Probabilties -> for chances of getting each cookie rarity. </p>
      <p>Click History -> for the past cookies that you have gotten.</p>
      <p> Click Info -> for more information and disclaimers!</p>
</div>
<div class="guide">
    <h2>To start rolling just press roll 10 to do 10 rolls or roll 1 like in the game!</h2>
    <p>The colours will tell you the rarity of each cookie that you got. Only cookie, not soul stone. 
      As an example here are all the cookie rarities and their respective colours</p>
    <p class="Legendary">Legendary/Ancient</p> 
    <p class="Epic">Epic</p>
    <p class="Rare">Rare</p>
    <p class="Common">Common</p>
</div>
</body>
</html>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { component } from 'vue/types/umd';
@Component({
    data() {
      return {
        import :{CharacterData} , from: '../../character.ts',
        popup: true, // will always popup when page is opened
      }
  },
})
export default class Standard extends Vue {}
window.addEventListener('load', function () {
  })
</script>
<style scoped>
.guide{
  text-align:center;
  font-family: CRK;
}

body {
    /* background-image: url(../assets/images/banana.webp); */
    height: fit-content; 
    background-position: center;
    background-repeat: repeat-y repeat-x;
    background-size: auto;
    position: relative;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
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
  
  .modal-content {
    background-color: white;
    margin: auto;
    padding: 20px;
    border: 2px solid black;
    width: 80%;
    border-radius: 25px;
  }
  
  .closebtn {
    color: grey;
    float: right;
    font-size: 30px;
    font-weight: bold;
    display:block;
    cursor: pointer;
  }
  
  .close:hover,
  .close:focus {
    color: rgb(104, 107, 109);
    text-decoration: none;
  }
  .Common {
    background: linear-gradient(to right , rgb(90, 90, 90), #5b5b5b );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 6s ease-in-out infinite;
    background-size: 400% 100%;
}

.Rare {
    background: linear-gradient(to right , #6666ff, #0099ff , #00ff88);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 6s ease-in-out infinite;
    background-size: 400% 100%;
}
  
.Epic {
    background: linear-gradient(to right , #ee00ff, #ee52b2, #6200ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 6s ease-in-out infinite;
    background-size: 400% 100%;
}

.Legendary {
    background: linear-gradient(to right , #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 6s ease-in-out infinite;
    background-size: 400% 100%;
}

@keyframes rainbow_animation {
    0%,100% {
        background-position: 0 0;
    }

    50% {
        background-position: 100% 0;
    }
}
</style>