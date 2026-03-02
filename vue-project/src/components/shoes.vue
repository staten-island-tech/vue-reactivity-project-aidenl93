<template>
    <div>
        <li v-for="shoe in shoes" :key="shoe.id">
            <section class="shoecontainer"> 
              <div class="shoelist">
            <h2>{{ shoe.brand }} </h2>
            <h2>{{ shoe.model }} </h2>
           <button class="buybutton" @click="buyShoe(shoe)"> ${{ shoe.price }} </button>
              </div>
            </section>
             
        </li>
    </div>
</template>

<script setup>

import {ref} from 'vue'
const shoes = ref([
  {
    id: 1,
    brand: "Nike",
    model: "Air Jordan 1 Retro High",
    price: 180
  },
  {
    id: 2,
    brand: "Nike",
    model: "LeBron 21",
    price: 200
  },
  {
    id: 3,
    brand: "Adidas",
    model: "Yeezy Boost 350 V2",
    price: 230
  },
  {
    id: 4,
    brand: "Adidas",
    model: "UltraBoost 1.0",
    price: 190
  },
  {
    id: 5,
    brand: "Puma",
    model: "MB.03 LaMelo Ball",
    price: 125
  },
  {
    id: 6,
    brand: "Under Armour",
    model: "Curry 11",
    price: 160
  },
  {
    id: 7,
    brand: "New Balance",
    model: "550",
    price: 110
  },
  {
    id: 8,
    brand: "Reebok",
    model: "Question Mid",
    price: 150
  }
]);
const shoesbought = ref([])
function buyShoe(shoe) {
  console.log(shoe)
  shoesbought.push(shoe)
  console.log(shoesbought)
}

</script>

<style scoped>
.container {
  padding: 40px;
  background-color: #f4f6f8;
  min-height: 100vh;
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
