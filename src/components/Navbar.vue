<template>
  <header class="navbar">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'likes' }">Likes</router-link>
      </li>
    </ul>

    <h4>Catindr 🔥</h4>

    <div class="navbar-end">
      <div class="flex">{{ email }}</div>
      <div @click="logout">Logout</div>
    </div>
  
  </header>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: mapState({
    count: state => state.following.length,
    email: state => (state.auth.user ? state.auth.user.email : '')
  }),
  methods: {
    logout() {
      this.$store.dispatch("logout")
      this.$router.push({ name: "login" })
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.navbar {
  display: flex;
  background-color: $primary;
  box-sizing: border-box;
  padding: 1em 0;
  justify-content: space-between;
  align-items: center;

  h4 {
    color: white;
    margin: 0;
    padding: 0;
  }

  &-end {
    color: white;
    display: flex;

    div {
      margin-right: 1em;
      cursor: pointer;
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    box-sizing: border-box;

    a {
      padding: 1em;
      box-sizing: border-box;
      text-decoration: none;
      color: white;
      
      &.router-link-exact-active {
        background-color: lighten($primary, 10%);
      }

      &:hover {
        background-color: lighten($primary, 10%);
        color: white;
      }
    }
  }
}

</style>
