<template>
  <div id="app">
    <navbar v-if="isAuthenticated" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { mapState } from 'vuex'

export default {
  components: {
    Navbar,
  },
  computed: mapState({
    isAuthenticated: state => state.auth.isAuthenticated,
  })
}

</script>

<style lang="scss">
@import '@/styles/index.scss';

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


</style>
