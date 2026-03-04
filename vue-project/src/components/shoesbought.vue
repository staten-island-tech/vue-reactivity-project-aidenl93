<template>
    <div v-for="shoe in shoesowned" :key="shoe.id">
         <section class="shoecontainer"> 
            <div class="shoelist">
            <h2>{{ shoe.brand }} </h2>
            <h2>{{ shoe.model }} </h2>
            </div>
        </section>
    </div>
</template>

<script setup>
import shoes from '@/components/shoes.vue'
defineProps({
  shoesowned: Array
})
</script>

<style scoped>

</style>