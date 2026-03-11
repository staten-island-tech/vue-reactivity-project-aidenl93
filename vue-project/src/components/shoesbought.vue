<template>
  <div class="shoe-grid">
    <li v-for="shoe in shoesowned" :key="shoe.id" class="shoecard">
      <div class="shoe-info">
        <h2 class="brand">{{ shoe.brand }}</h2>
        <h3 class="model">{{ shoe.model }}</h3>
        <p class="price">Current Price: ${{ shoe.price }}</p>
        <button class="sellbutton" @click="sellShoe(shoe)">Sell</button>
      </div>
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

<style scoped>
.shoe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  padding: 20px;
  list-style: none;
}

.shoecard {
  background: linear-gradient(135deg, #1c1c1c, #111);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.shoecard:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.5);
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
  color: #fff;
  margin: 0;
}

.model {
  font-size: 1rem;
  color: #ccc;
  margin: 0;
}

.price {
  font-size: 0.95rem;
  color: #aaa;
  margin: 0;
}

.sellbutton {
  margin-top: 10px;
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  background: #ff4d4d;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.15s ease;
}

.sellbutton:hover {
  background: #ff1a1a;
  transform: scale(1.05);
}
</style>
