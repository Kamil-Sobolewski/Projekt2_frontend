<template>
    <v-container>
        <h1>Product edit page</h1>
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
            :value="getCategory(product.category_id)"
            
            item-text="name"
            readonly
            label="Category"
            ref="category_name"
        ></v-select>

        <v-btn @click="saveProduct">Edit product</v-btn>
    </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    // @input="add_category($event)"
    // data() {
    //     return {
    //         new_category: {}
    //     }
    // },
    computed: {
        ...mapState(['products', 'categories']),
        ...mapGetters(['getCategory']),
        product(){
            return this.products.find(p => p.id == this.$route.params.id);
        },
    },
    methods: {
        add_category(value) {
            this.new_category = value;
            console.log(this.new_category);
        },
        async saveProduct() {
            let category_id = this.$refs.category_name._data.selectedItems[0].id
            this.product.category_id = category_id;
            let savedProduct = await this.$store.dispatch('editProduct', this.product);
            this.$router.push({name:'product', params: {id: savedProduct.id}});
        },
    },
}
</script>