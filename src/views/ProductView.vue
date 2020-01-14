<template>
    <v-container>
        <v-row>
            <v-col md="6" cols="12">
                <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
            </v-col>
            <v-col md="6" cols="12">
                <v-btn :to="{ name: 'category', params: {id: product.category_id}}"
                        color="green lighten-2"
                        class="mr-1 mb-2"
                        x-small>
                    {{ getCategory(product.category_id).name }}
                </v-btn>
                <div class="display-1">{{ product.name }}</div>

                <div>{{ product.description }}</div>
                <div>Product's price - {{ product.price }} zł</div>
                <div>Product's weight - {{ product.weight }} g</div>
                
                

                <div>
                <v-btn
                :to="{ name:'product-edit', params: {id: product.id}}"
                color="orange"
                text
                >
                    Edit
                </v-btn>

                <v-btn
                @click="deleteProduct"
                color="orange"
                text
                >
                    Delete
                </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapState(['products']),
        ...mapGetters(['getCategory']),
        product() {
            return this.products.find(p => p.id == this.$route.params.id);
        },
    },
    methods: {
        async deleteProduct() {
            let res = confirm(`Delete ${this.product.name}?`)
            if (res) {
                await this.$store.dispatch('deleteProduct', this.product.id)
                this.$router.push({name:'product-list'});
            }
        }
    },
}
</script>