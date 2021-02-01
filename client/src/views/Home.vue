<template>
  <div class="home">
    <Nav />
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
    <div class="products justify-content-center mt-5">
      <b-card-group deck class="container justify-content-center text-center">
        <!-- <div v-if="!products.length">Loading</div> -->
        <div v-if="!products.length" class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
          @sendId="sendId"
        ></Product>
      </b-card-group>
    </div>
    <hr />
    <Receipt :purchasedId="purchasedId" />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Product from '@/components/Product.vue';
import Receipt from '@/components/Receipt.vue';

export default {
  name: 'Home',
  components: { Nav, Product, Receipt },
  data() {
    return {
      payload: '',
      purchasedId: 0,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch('upPayloadBroadcast');
  },
  methods: {
    sendId(id) {
      this.purchasedId = id;
    },
  },
};
</script>
<style>
.welcome {
  background-image: url('../assets/blob.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
  height: 60vh;
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

.total {
  color: #e59d3e;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #e59d3e;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #e59d3e transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
