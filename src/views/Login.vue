<template>
  <div class="login-view">
    <div>
      <div class="banner">
        <img src="@/assets/icons/cat.png" alt="Catindr">
        <h2>Catindr</h2>
      </div>
    </div>

    <div>
      <form class="login-form" @submit.prevent="login">
        <h4>Sign-in here</h4>
        
        <input v-model="email" type="email" placeholder="E-Mail">
        <input v-model="password" type="password" placeholder="Password">

        <router-link :to="{ name: 'sign-up' }">
          You don't have any account yet? Sign up here! :D
        </router-link>

        <button>
          Login!
        </button>

        <span>
          {{ error }}
        </span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async login() {
      try {
        const auth = this.$firebase.auth()
        const { user } = await auth.signInWithEmailAndPassword(this.email, this.password)
        this.$store.dispatch('login', user)
        this.$router.push({ name: 'home' })
      }
      catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .banner {
    display: flex;
    flex-direction: column;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
}

.login-form {
  display: flex;
  flex-direction: column;
  max-width: 640px;
  padding: 1em;
}

img {
  max-width: 256px;
  max-height: 256px;
}
</style>
