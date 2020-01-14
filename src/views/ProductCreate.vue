<template>
    <v-container>
        <h1>Product create page</h1>
        <v-text-field 
            v-model="product.name" 
            label="Name" 
        />
        <v-textarea 
            v-model="product.description" 
            label="Description" 
        />
        <v-text-field 
            v-model="product.price" 
            label="Price" 
            type="number"
            suffix="zł"
        ></v-text-field>
        <v-text-field 
            v-model="product.weight" 
            label="Weight"
            type="number"
            suffix="g"
        ></v-text-field>
        <v-select
            :items="categories"
            item-text="name"
            v-model="product.category"
            readonly
            label="Category"
        ></v-select>

        <v-btn @click="saveProduct">Create product</v-btn>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            product: {}
        }
    },
    computed: {
        categories() {
            return this.$store.state.categories
        },
    },
    methods: {
        async saveProduct() {
            let savedProduct = await this.$store.dispatch('createProduct', this.product);
            // this.$router.push({name: 'product-list'})
            this.$router.push({name:'product', params: {id: savedProduct.id}});
        }
    },
}
</script>