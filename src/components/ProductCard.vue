<template>
    <v-card
    class="ma-2"
    max-width="400"
    >
        <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        <v-card-title>{{ product.name }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">{{ product.price }}zł - {{ product.weight }}g</v-card-subtitle>

        <v-card-text class="text--primary">
            <div>{{ product.description }}</div>
        </v-card-text>

        <v-card-actions>
            <v-btn
            :to="{ name: 'product', params: { id: product.id } }"
            color="orange"
            text
            >
                View
            </v-btn>

            <v-btn
            color="orange"
            text
            >
                {{ getCategory(product.category_id).name }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['product'],
    computed: {
        ...mapGetters(['getCategory']),
    },
}
</script>