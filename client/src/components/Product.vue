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
        <div class="font-weight-normal font">
          {{ formatter(product.price) }}
        </div>
        <div>Stock: {{ product.stock }}</div>
      </b-card-text>
      <b-button
        @click.prevent="buy(product.id)"
        class="btn-block btn-info"
        variant="primary"
        :disabled="product.stock == 0 ? true : false"
        ><b-icon-cart-4 class="mr-1"></b-icon-cart-4>
        Buy
      </b-button>
    </b-card>
    <audio ref="aud" src="@/assets/cash.wav"></audio>
  </div>
</template>

<script>
import formatter from '../helpers/formatter';
export default {
  props: ['product'],
  data() {
    return {
      purchased: '',
    };
  },
  methods: {
    buy(id) {
      const audio = this.$refs.aud;
      audio.currentTime = 0;
      audio.play();
      this.$store.dispatch('buy', id);
      this.$emit('sendId', id);
    },
    formatter,
  },
};
</script>

<style>
h5 {
  font-size: large !important;
  color: #e59d3e;
}

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
