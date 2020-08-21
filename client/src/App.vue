<template>
  <div id="app">
    <b-nav class="nav-padding"></b-nav>
    <b-nav class="nav justify-content-center align-content-center shadow">
      <div class="d-flex container justify-content-center">
        <b-nav-item
          ><span class="balance">Rp.{{ currentMoney }}</span></b-nav-item
        >
      </div>
    </b-nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    currentMoney() {
      return this.$store.state.money;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
#app {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
}

div {
  margin: 0 !important;
  /* padding: 0 !important; */
}

.nav {
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  z-index: 1;
  background-color: #b3ddff;
}

.nav-padding {
  height: 60px;
  position: relative;
}

.balance {
  font-size: x-large;
  font-weight: 400;
  color: #e59d3e;
}
</style>
