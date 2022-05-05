<template>
    <div class="history">
        <div v-for="(char, i) in $store.state.soulstones" :key="i">
            {{ char.name }} - {{ char.soulstones }} Soulstones
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
<style lang="scss" scoped>

</style>