<template>
    <div>
        <div class="display-4 ma-4 d-flex justify-center">
            All Products in {{ category.name }}
        </div>

        <div class="d-flex flex-wrap">
            <div v-for="product in products" :key="product.id">
                <ProductCard :product="product" :category="getCategory(product.category_id).name"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

export default {
    components: {
        ProductCard
    },
    computed: {
        ...mapGetters(['getCategory']),
        category() {
            return this.$store.getters.getCategory(this.$route.params.id)
        },
        products() {
            return this.$store.state.products.filter(p => this.category.id == p.category_id)
        },
    }
}
</script>