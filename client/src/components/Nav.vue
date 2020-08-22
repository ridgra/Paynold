<template>
  <div>
    <b-nav class="nav-padding"></b-nav>
    <b-nav
      class="nav justify-content-center align-content-center shadow bg-info"
    >
      <div class="d-flex container justify-content-between">
        <b-nav-item>
          <b-img
            src="../assets/logo.jpg"
            rounded="circle"
            alt="Circle image"
            v-bind="{
              width: 40,
              height: 40,
              class: 'm1',
            }"
          ></b-img>
          <span class="ml-3 text-white balance font-weight-normal"
            >PAYNOLD</span
          >
        </b-nav-item>
        <b-nav-item>
          <span class="balance text-white">
            <b-icon-cash-stack class="mr-3"></b-icon-cash-stack>
            <number
              ref="number1"
              :from="balance"
              :to="balance"
              :format="theFormat"
              :duration="1"
              :delay="0"
              easing="Power1.easeOut"
            />
          </span>
        </b-nav-item>
      </div>
    </b-nav>
  </div>
</template>

<script>
import formatter from '../helpers/formatter';

export default {
  name: 'Nav',
  data() {
    return {};
  },
  computed: {
    balance() {
      return this.$store.state.balance;
    },
  },
  methods: {
    theFormat(number) {
      return formatter(number);
    },
  },
};
</script>

<style>
.nav {
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  z-index: 1;
}

.nav-padding {
  height: 60px;
  position: relative;
}

.balance {
  font-size: x-large;
  font-weight: 400;
}
</style>
