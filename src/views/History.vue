<template>
<body>
    <div class="app">
        <div class="history">
            <!-- display soulstone amount  -->
                    <div v-for="(char, i) in $store.state.soulstones" :key="i">
                    <span>{{ char.name }} - {{ char.soulstones }} soulstones</span>
                    </div>

<table id="customers" class="table">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
    <td>France</td>
  </tr>
</table>

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
    color: white;
    font-family: 'CRK';
    text-shadow:
          -1px -1px 0 #000,
          1px -1px 0 #000,
          -1px 1px 0 #000,
          1px 1px 0 #000;
}

span {
 background-color: #40508d;
}

body {
    background-image: url(../assets/images/parfait.png);
    height: fit-content; 
    background-position: center;
    background-repeat: repeat-y;
    background-size: auto;
    position: relative;
}

.table{
    margin-left: auto;
    margin-right: auto;
}

</style>