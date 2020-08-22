<template>
  <div class="text-center pb-5 pt-2">
    <h4 class="text-info my-3">Your Receipt</h4>
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="row" :key="key" v-for="(value, key) in receipt">
          <div class="col-5 text-left">
            {{ key }}
          </div>
          <div class="col-3 text-right">✕ {{ value.count }}</div>
          <div class="col-4 text-right">
            {{ formatter(value.price) }}
          </div>
        </div>
        <div class="row my-2" style="border-top:1px solid rgba(0,0,0,0.2)">
          <div class="col-5 text-left">
            <span class="total font-weight-bold">Total</span>
          </div>
          <div class="col-3 text-right"></div>
          <div class="col-4 text-right">
            <span class="total font-weight-bold">{{
              formatter(totalPrice)
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatter from '../helpers/formatter';
export default {
  name: 'Receipt',
  props: ['purchasedId'],
  data() {
    return {
      receipt: {},
      totalPrice: 0,
    };
  },
  computed: {
    purchased() {
      return this.$store.state.balance;
    },
  },
  methods: {
    formatter,
  },
  watch: {
    purchased() {
      const currentId = this.purchasedId;
      const products = this.$store.state.products;
      if (currentId) {
        const getProduct = products.find((e) => e.id == currentId);
        if (!this.receipt[getProduct.name]) {
          this.receipt[getProduct.name] = { count: 0, price: getProduct.price };
        }
        this.receipt[getProduct.name].count++;
        let sum = 0;
        for (const key in this.receipt) {
          const { count, price } = this.receipt[key];
          sum += count * price;
        }
        this.totalPrice = sum;
      }
    },
  },
};
</script>

<style></style>
