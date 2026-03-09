<template>
  <h1>reselling simulator</h1>
  <h1>money: {{ money }}</h1>
  <h1>time until shoe restocks: {{ restocktimer }}</h1>
  <shoes @buy="addShoe"></shoes>
  <shoesbought :shoesowned="shoesowned"></shoesbought>

</template>

<script setup>
import { ref } from 'vue'
import shoes from '@/components/shoes.vue'
import shoesbought from '@/components/shoesbought.vue'
let restocktimer = ref(10)
setInterval(() => {
  shoes.forEach(shoe => {
    shoe.instock = 10
  });
  restock
}, 1000);
const shoesowned = ref([])
let money = ref(2000)
function addShoe(shoe) {
  if( shoe.instock > 0 && money.value > shoe.price) {
    shoesowned.value.push(shoe)
    shoe.instock -= 1
    money.value = money.value - shoe.price
  } else {
    alert ("out of stock or you have no money")
  }
}
</script>