<template>
  <shoes @buy="addShoe"></shoes>
  <shoesbought :shoesowned="shoesowned"></shoesbought>
</template>

<script setup>
import { ref } from 'vue'
import shoes from '@/components/shoes.vue'
import shoesbought from '@/components/shoesbought.vue'

const shoesowned = ref([])

function addShoe(shoe) {
  shoesowned.value.push(shoe)
}
</script>