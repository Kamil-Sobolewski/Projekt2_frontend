import Vue from 'vue';
import Vuex from 'vuex';

import $axios from '@/services/axios-instance.js'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [],
        categories: [],
    },
    mutations: {
        set_products(state, products) {
            state.products = products;
        },
        set_categories(state, categories) {
            state.categories = categories;
        },
        add_product(state, product) {
            let products = state.products.concat(product);
            state.products = products;
        },
        edit_product(state, product) {
            for (let p of state.products) {
                if (p.id == product.id) {
                    p = product;
                    break;
                }
            }
        },
        delete_product(state, productID) {
            let products = state.products.filter(p => p.id != productID);
            state.products = products;
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            let response = await $axios.get('/products/all');
            commit('set_products', response.data.products);
            commit('set_categories', response.data.categories);
        },
        async createProduct({commit}, product) {
            let response = await $axios.post('/products/add', 
                {'product': product}, 
                {withCredentials: true});
            let savedProduct = response.data.product
            commit('add_product', savedProduct)
            return savedProduct
        },
        async editProduct({commit}, product) {
            let response = await $axios.post(`/products/${product.id}/edit`, 
                {'product': product}, 
                {withCredentials: true});
            let editedProduct = response.data.product
            commit('edit_product', editedProduct)
            return editedProduct
        },
        async deleteProduct({commit}, productID) {
            let res = await $axios.delete(`/products/${productID}/delete`);
            if (res.status == 200 || res.status == 204) {
                commit('delete_product', productID);
            }
        }
            
    },
    getters: {
        getCategory: state => id => {
            return state.categories.find(c => c.id == id)
        }
    }
});