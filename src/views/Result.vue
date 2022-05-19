<template>
    <div class="cookieforest">   
        <div class="container">
            <video autoplay v-if="showVideo" @ended="showVideo = false">
                <source src="@/assets/type2(epic).mp4" @ended="showVideo = false" v-if="highestRarityCookie === Rarity.Epic && randomBool1">
                <source src="@/assets/type4(epic).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Epic">
                <source src="@/assets/type2(rare).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Rare && randomBool2">
                <source src="@/assets/type3(rare).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Rare">
                <source src="@/assets/type3(rare).mp4" @ended="showVideo = false" v-else-if="highestRaritySoulstone">
                <source src="@/assets/type5(common).mp4" @ended="showVideo = false" v-else-if="highestRarityCookie === Rarity.Common">       
            </video>
            <button @click="showVideo = false" v-if="showVideo" class="skip success">SKIP</button>
        </div>
        <div v-if="!showVideo" class="results">
            <!-- shows name of the cookie or soulstone -->
            <br><br>
            <div v-for="(cookie, i) in result.cookies" :key="i" :class="Rarity[cookie.rarity]">{{cookie.name}}</div>
            <div v-for="(soulstone, i) in result.soulstones" :key="i">{{soulstone.name.replace("Cookie", "Soulstone")}}</div>
            <br>
            <div v-if="!showVideo">
                <router-link to="/" tag="button" class="homebtn green">Home</router-link>
                <router-link to="/featured" tag="button" class="ftbtn pink">Featured</router-link>
            </div>
        </div>
</div>
</template>
<script lang="ts">
import { Rarity } from '@/bindings/Rarity'
import { Result } from '@/types/Result'
import { Character } from '@/bindings/Character'
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            saveResults: false,
            Rarity: Rarity,
            highestRarityCookie: -1,
            highestRaritySoulstone: -1,
            epic: Math.random(),
            randomBool1: Math.random() < 0.5,
            randomBool2: Math.random() < 0.5,
            showVideo: true,
            result: JSON.parse(this.$route.query.result as string) as Result || new Result()
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (from.name == "Home") (vm as any).saveResults = true;
            next();
        })
    },
    mounted() {

        for (const cookie of this.result.cookies) {
            // if you get a cookie then the amount of soulstones you get are 20 
            if (this.saveResults) this.$store.commit('addSoulstones', {name: cookie.name, soulstones: 20});
            //end

            // find highest rarity cookie (so we know which animation to play)
            if (cookie.rarity && cookie.rarity > this.highestRarityCookie) {
                this.highestRarityCookie = cookie.rarity
            }
            //end
        }
        for (const soulstone of this.result.soulstones) {
            //if you get a soulstone then soulstone number is one 
            if (this.saveResults) this.$store.commit('addSoulstones', {name: soulstone.name, soulstones: 1});
            //end 

            // same thing but for soulstones
            if (soulstone.rarity && soulstone.rarity > this.highestRaritySoulstone) {
                this.highestRaritySoulstone = soulstone.rarity
            }
            //end
        }
        console.log(JSON.parse(this.$route.query.result as string))
    }
})
</script>

<style scoped src="@/assets/results.css">
</style>