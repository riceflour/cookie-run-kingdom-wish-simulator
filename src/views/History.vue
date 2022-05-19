<template>
<body>
        <div class="history">
            <!-- display soulstone amount  -->
                    <div v-for="(char, i) in $store.state.soulstones" :key="i">
                    <span>{{ char.name }} - {{ char.soulstones }} soulstones</span>
                    </div>

            <!-- <table>
                <tr>
                    <div v-for="(char, i) in $store.state.soulstones" :key="i">
                    <td><span>{{ char.name }}</span></td>
                    </div>
                </tr>
                <tr>
                    <div v-for="(char, i) in $store.state.soulstones" :key="i">
                    <td><span>{{ char.soulstones }} Soulstones</span></td>
                    </div>
                </tr> -->
            <!-- </table> -->    
        <!-- end -->
        </div>
</body>
</template>
<script lang="ts">
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

.table{
    margin-left: auto;
    margin-right: auto;
}

</style>