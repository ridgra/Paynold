<template>
  <div class="col-3 mb-4">
    <b-card>
      <b-card-text>
        <img
          class="card-img"
          :src="`http://localhost:3000${product.imgUrl}`"
          height="140"
        />
        <h5 class="mt-3">{{ product.name }}</h5>
        <div>{{ product.price }}</div>
        <div>Stock: {{ product.stock }}</div>
      </b-card-text>
      <b-button
        @click.prevent="buy(product.id)"
        class="btn-block btn-info"
        variant="primary"
        >Buy</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    // buy(id) {
    // socket.emit('buy', id);
    // this.$store.dispatch('buy', id);
    // },
  },
  watch: {
    product() {},
  },
};
</script>

<style>
.card-title {
  font-size: large;
}

.products {
  text-align: -webkit-center;
}

.card-img {
  object-fit: scale-down;
}
</style>
