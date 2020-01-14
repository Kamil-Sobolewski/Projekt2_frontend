<template>
  <v-app>
    
    <Navbar />

    <v-content>
      <router-view />
    </v-content>

  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default { 
  name: 'App',
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  components: {
    Navbar,
  },
};
</script>
