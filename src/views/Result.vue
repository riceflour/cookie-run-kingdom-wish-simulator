<template>
    <div>
        <!-- different animations play for different rarities -->
        <video autoplay id="banner-video" muted v-if="showVideo" @ended="showVideo = false">
            <source src="@/assets/type1(epic).mp4" @ended="showVideo = false" v-if="highestRarityCookie === Rarity.Epic && randomBool">
            <source src="@/assets/type2(epic).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Epic && epicanimation2">
            <source src="@/assets/type4(epic).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Epic && epicanimation3">
            <source src="@/assets/type2(rare).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Rare && randomBool2">
            <source src="@/assets/type3(rare).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Rare">
            <source src="@/assets/type3(rare).mp4" @ended="showVideo = false" v-else-if="highestRaritySoulstone">
            <source src="@/assets/type3(rare).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Common">      
        </video>
        <button @click="showVideo = false" v-if="showVideo" class="active">Skip</button>

        <div v-if="!showVideo" class="results">
            <!-- showing the name of cookie -->
            <div v-for="(cookie, i) in result.cookies" :key="i">{{cookie.name}}</div>
            <div v-for="(soulstone, i) in result.soulstones" :key="i">{{soulstone.name.replace("Cookie", "Soulstone")}}</div>
        </div>
        <button v-if="!showVideo" class="active">back</button>
    </div>
</template>
<script lang="ts">
import { Rarity } from '@/bindings/Rarity'
import { Result } from '@/types/Result'
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            Rarity: Rarity,
            highestRarityCookie: -1,
            highestRaritySoulstone: -1,
            epic: Math.random(),
            // depending on the random number generated above, different epic animations will play
            randomBool: this.$data.epic < 0.3,
            epicanimation2: this.$data.epic < 0.5,
            epicanimation3: this.$data.epic < 1,
            randomBool2: Math.random() < 0.5,
            showVideo: true,
            result: JSON.parse(this.$route.query.result as string) as Result || new Result()
        }
    },
    mounted() {
        for (const cookie of this.result.cookies) {
            if (cookie.rarity && cookie.rarity > this.highestRarityCookie) {
                this.highestRarityCookie = cookie.rarity
            }
        }
        for (const soulstone of this.result.soulstones) {
            if (soulstone.rarity && soulstone.rarity > this.highestRaritySoulstone) {
                this.highestRaritySoulstone = soulstone.rarity
            }
        }
        console.log(JSON.parse(this.$route.query.result as string))
    }
})
</script>

<style lang="scss" scoped>

button {
    background-color: #666;
    font-family: CRK;
    border: medium none;
    color: #fff;
    display: block;
    font-size: 18px;
    left: 0;
    margin: 0 auto;
    padding: 8px 16px;
    position: absolute;
    left: 90%;
    top: 10%;
}

button.active{
    background: transparent;
}

video {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
}

body {
    font-family: CRK;
}

.results{
  font-family: CRK;
  text-align: center;
  text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
  color: white;
}

</style>