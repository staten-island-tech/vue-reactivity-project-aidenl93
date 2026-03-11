<template>
    <div>
        <li v-for="shoe in shoes" :key="shoe.id">
            <section class="shoecontainer"> 
              <div class="shoelist">
            <h2>{{ shoe.brand }} </h2>
            <h2>{{ shoe.model }} </h2>
            <h2>Amount In Stock: {{ shoe.instock }}</h2>
            <button class="buybutton" @click="buyShoe(shoe)"> ${{ shoe.price }} </button>
              </div>
            </section>
        </li>
    </div>
</template>

<script setup>
const emit = defineEmits(['buy'])
import {ref} from 'vue'

const props = defineProps({
  shoes: Array
})

function buyShoe(shoe) {
  emit('buy', shoe)
}


</script>

<style scoped>


.shoecontainer {
  background-color: lightcoral;
}

.shoelist {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.shoecard {
  background: white;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.shoecard:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.12);
}

.shoe {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.brand {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
}

.model {
  font-size: 0.95rem;
  color: #666;
  margin: 0;
}

.buybutton {
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  background: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

.buybutton:hover {
  background: #333;
  transform: scale(1.05);
}



</style>
