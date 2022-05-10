<template>
    <div class="history">
        <!-- display soulstone amount  -->
        <div v-for="(char, i) in $store.state.soulstones" :key="i">
            {{ char.name }} - {{ char.soulstones }} Soulstones
        </div>
        <!-- end -->
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
<style lang="scss" scoped>
.history{
    text-align: center;
    color: white;
    font-family: 'CRK';
    text-shadow:
          -1px -1px 0 #000,
          1px -1px 0 #000,
          -1px 1px 0 #000,
          1px 1px 0 #000;
}


</style>