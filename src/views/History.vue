<template>
<body>
        <div class="history">
            <!-- fetch cookie information from store and set class as the cookie's rarity -->
                    <div v-for="(char, i) in $store.state.soulstones" :key="i">
                    <!-- display soulstone amount  -->
                    <span>{{ char.name }} - {{ char.soulstones }} soulstones</span>
                    </div>
        </div>
</body>
</template>
<script lang="ts">
import { Rarity } from '@/bindings/Rarity'
import { Result } from '@/types/Result'
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
           
        }
    }
})
</script>
<style lang="scss" scoped>
.history{
    text-align: center;
    color: black;
    font-family: 'CRK';
    font-size: 20px;
}

span {
 background-color: #fff;
}

body {
    background-image: url(../assets/images/apple.webp);
    height: fit-content; 
    background-position: center;
    background-repeat: repeat-y repeat-x;
    background-size: auto;
    position: relative;
}

  .rainbow {
      text-align: center;
      text-decoration: underline;
      font-size: 32px;
      font-family: monospace;
      letter-spacing: 5px;
  }

  .Common {
    background: linear-gradient(to right , rgb(90, 90, 90), #5b5b5b);
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
// different text colours depending on the rarity
.Legendary {
    background: linear-gradient(to right , #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 6s ease-in-out infinite;
    background-size: 400% 100%;
}
//specifies the animation code
@keyframes rainbow_animation {
    0%,100% {
        background-position: 0 0;
    }

    50% {
        background-position: 100% 0;
    }
}
</style>