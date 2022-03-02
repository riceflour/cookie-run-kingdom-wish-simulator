<template>
    <div>
        <video autoplay muted v-if="showVideo" @ended="showVideo = false">
            <source src="@/assets/type1(epic).mp4" @ended="showVideo = false" v-if="highestRarityCookie === Rarity.Epic && randomBool">
            <source src="@/assets/type2(epic).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Epic">
            <source src="@/assets/type2(rare).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Rare && randomBool2">
            <source src="@/assets/type3(rare).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Rare">
            <source src="@/assets/type3(rare).mp4" @ended="showVideo = false" v-else-if="highestRaritySoulstone">
            <source src="@/assets/type3(rare).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Common">      
        </video>
        <button @click="showVideo = false" v-if="showVideo" class="skip">Skip</button>
        <div v-if="!showVideo" class="results">
            <div v-for="(cookie, i) in result.cookies" :key="i">{{cookie.name}}</div>
            <div v-for="(soulstone, i) in result.soulstones" :key="i">{{soulstone.name.replace("Cookie", "Soulstone")}}</div>
        </div>
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
            randomBool: Math.random() < 0.5,
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

.skip{
float: right;
}

body {
    background-image: url(../assets/carousel.png);
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
//   display: flex;
//   align-items: center;
//   min-height: 100vh;
}

</style>