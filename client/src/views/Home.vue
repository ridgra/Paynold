<template>
  <div class="home">
    <div class="welcome row">
      <div class="col-6"></div>
      <div class="col-6 d-flex flex-column justify-content-center my-5">
        <span class="heading1">Happy Birthday Arnold!</span>
        <div class="heading3">
          Dalam rangka merayakan ulang tahunnya Arnold,
        </div>
        <div class="heading2">All you can buy!</div>
        <div class="heading3">Penawaran terbatas, hanya hari ini!</div>
      </div>
    </div>
    <!-- <router-view/> -->
    <div class="products justify-content-center mt-5">
      <b-card-group deck class="container justify-content-center text-center">
        <Product v-for="product in products" :key="product.id" :product=product></Product>
      </b-card-group>
    </div>
  </div>
</template>

<script>

import Product from '@/components/Product.vue';
// import socket from '../socket'

export default {
  name: 'Home',
  components: { Product },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')

    // socket.emit('fetchProducts')
    // socket.on('products', (data) => {
    //   this.$store.dispatch('getProduct', data)
    // })
  }

};
</script>
<style>
.welcome {
  background-image: url('../assets/blob.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
  height: 100vh;
}

.heading1 {
  font-size: 2em;
  color: #e59d3e;
}
.heading2 {
  font-size: 1.2em;
  font-weight: 400;
  color: #e59d3e;
}

</style>
