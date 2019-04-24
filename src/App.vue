<template>
  <div id="app">
    <NavbarComponent />
    <b-container class="mt-3">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';

export default {
  components: {
    NavbarComponent,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.center {
  text-align: center;
}
</style>
