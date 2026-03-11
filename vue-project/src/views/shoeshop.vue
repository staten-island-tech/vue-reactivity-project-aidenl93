<template>
  <h1>reselling simulator</h1>
  <h2>how to play:</h2>
  <p>
    on restock, the shoe will go back to their restock prices. this is the lowest possible price.
    the shoes can either increase or decrease in demand AT random every 5 seconds, and you can sell
    them at a higher price to make profit.
  </p>
  <h1>money: {{ money }}</h1>
  <h1>time until shoe restocks: {{ restocktimer }}</h1>
  <h2>price change timer: {{ priceChangeTimer }}</h2>
  <Shoes :shoes="shoes" @buy="addShoe"></Shoes>
  <shoesbought :shoesowned="shoesowned" @sell="sellShoe"> </shoesbought>
</template>

<script setup>
import { ref } from 'vue'
import Shoes from '@/components/shoes.vue'
import shoesbought from '@/components/shoesbought.vue'
const shoes = ref([
  {
    id: 1,
    brand: 'Nike',
    model: 'Air Jordan 1 Retro High',
    price: 180,
    basePrice: 180,
    instock: 10,
  },
  {
    id: 2,
    brand: 'Nike',
    model: 'LeBron 21',
    price: 200,
    basePrice: 200,
    instock: 10,
  },
  {
    id: 3,
    brand: 'Adidas',
    model: 'Yeezy Boost 350 V2',
    price: 230,
    basePrice: 230,
    instock: 10,
  },
  {
    id: 4,
    brand: 'Adidas',
    model: 'UltraBoost 1.0',
    price: 190,
    basePrice: 190,
    instock: 10,
  },
  {
    id: 5,
    brand: 'Puma',
    model: 'MB.03 LaMelo Ball',
    price: 125,
    basePrice: 125,
    instock: 10,
  },
  {
    id: 6,
    brand: 'Under Armour',
    model: 'Curry 11',
    price: 160,
    basePrice: 160,
    instock: 10,
  },
  {
    id: 7,
    brand: 'New Balance',
    model: '550',
    price: 110,
    basePrice: 110,
    instock: 10,
  },
  {
    id: 8,
    brand: 'Reebok',
    model: 'Question Mid',
    price: 150,
    basePrice: 150,
    instock: 10,
  },
])
let restocktimer = ref(60)
let priceChangeTimer = ref(5)
setInterval(() => {
  restocktimer.value -= 1

  if (restocktimer.value === 0) {
    restocktimer.value = 60

    shoes.value.forEach((shoe) => {
      shoe.instock = 10
      shoe.price = shoe.basePrice
    })

    console.log('shoes restocked')
  }
}, 1000)
const shoesowned = ref([])
let money = ref(2000)
function addShoe(shoe) {
  if (shoe.instock > 0 && money.value > shoe.price) {
    shoesowned.value.push(shoe)
    shoe.instock -= 1
    money.value = money.value - shoe.price
  } else {
    alert('out of stock or you have no money')
  }
}
function sellShoe(shoe) {
  const shoenumber = shoesowned.value.indexOf(shoe)

  if (shoenumber !== -1) {
    shoesowned.value.splice(shoenumber, 1)
    money.value = shoe.price + money.value
  }
}
setInterval(() => {
  priceChangeTimer.value -= 1
  if (priceChangeTimer.value === 0) {
    priceChangeTimer.value = 5
    shoes.value.forEach((shoe) => {
      const change = Math.floor(Math.random() * 21) - 10

      shoe.price += change

      if (shoe.price < shoe.basePrice) {
        shoe.price = shoe.basePrice
      }
    })
  }
}, 1000)
</script>
<style scoped>
h1,
h2 {
  text-align: center;
  color: #222;
  margin: 10px 0;
}

p {
  text-align: center;
  max-width: 600px;
  margin: 10px auto 20px auto;
  color: #555;
  font-size: 0.95rem;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
