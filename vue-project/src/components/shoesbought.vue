<template>
    <div v-for="shoe in shoesbought" :key="shoe.id">
         <section class="shoecontainer"> 
            <div class="shoelist">
            <h2>{{ shoe.brand }} </h2>
            <h2>{{ shoe.model }} </h2>
            </div>
        </section>
    </div>
</template>

<script>
import shoes from '@/components/shoes.vue'

</script>

<style lang="scss" scoped>

</style>