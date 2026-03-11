<template>
  <div>
    <li v-for="shoe in shoesowned" :key="shoe.id">
      <section class="shoecontainer">
        <div class="shoelist">
          <h2>{{ shoe.brand }}</h2>
          <h2>{{ shoe.model }}</h2>
          <h2>Current Price: ${{ shoe.price }}</h2>

          <button class="sellbutton" @click="sellShoe(shoe)">Sell</button>
        </div>
      </section>
    </li>
  </div>
</template>

<script setup>
const emit = defineEmits(['sell'])

const props = defineProps({
  shoesowned: Array,
})

function sellShoe(shoe) {
  emit('sell', shoe)
}
</script>

<style scoped></style>
