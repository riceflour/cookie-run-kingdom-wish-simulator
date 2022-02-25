<template>
    <div class="hello">
        <img :src="`@/assets/scraper_output/assets/${cookie.name}`">
        {{ cookie.rarity }}
    
    </div>


</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Character } from '@/bindings/Character'


@Component
export default class HelloWorld extends Vue {
  @Prop() private cookie!: Character;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body{
  background-image: url(../assets/);
}
</style>
