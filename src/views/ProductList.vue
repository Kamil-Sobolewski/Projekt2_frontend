<template>
    <div>
        <div class="display-4 ma-4 d-flex justify-center">
            All Products
        </div>

        <div class="d-flex flex-wrap">
            <div v-for="product in products" :key="product.id">
                <ProductCard :product="product"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
    components: {
        ProductCard
    },
    computed: {
        products() {
            return this.$store.state.products
        },
    },
}
</script>