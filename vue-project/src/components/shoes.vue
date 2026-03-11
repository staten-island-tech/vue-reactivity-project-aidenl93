<template>
  <div class="shoe-grid">
    <li v-for="shoe in shoes" :key="shoe.id" class="shoecard">
      <div class="shoe-info">
        <h2 class="brand">{{ shoe.brand }}</h2>
        <h3 class="model">{{ shoe.model }}</h3>
        <p class="stock">In Stock: {{ shoe.instock }}</p>
        <button class="buybutton" @click="buyShoe(shoe)">Buy ${{ shoe.price }}</button>
      </div>
    </li>
  </div>
</template>

<script setup>
const emit = defineEmits(['buy'])

const props = defineProps({
  shoes: Array,
})

function buyShoe(shoe) {
  emit('buy', shoe)
}
</script>

<style scoped>
.shoe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  padding: 20px;
  list-style: none;
}

.shoecard {
  background: linear-gradient(135deg, #fff, #f9f9f9);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.shoecard:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
}

.shoe-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}

.brand {
  font-size: 1.3rem;
  font-weight: 700;
  color: #222;
  margin: 0;
}

.model {
  font-size: 1rem;
  color: #555;
  margin: 0;
}

.stock {
  font-size: 0.9rem;
  color: #888;
  margin: 0;
}

.buybutton {
  margin-top: 10px;
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  background: #1e1e1e;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.15s ease;
}

.buybutton:hover {
  background: #333;
  transform: scale(1.05);
}
</style>
