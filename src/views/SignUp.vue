<template>
<div class="sign-up">
  <form class="sign-up-form" @submit.prevent="signUp">
    <input v-model="email" type="email" placeholder="E-Mail">
    <input v-model="password" type="password" placeholder="Password">
    <input v-model="repeatPassword" type="password" placeholder="Repeat password">

    <button>
      Create account!
    </button>

    <span class="sign-up-error" v-show="error">
      {{ error }}
    </span>
  </form>
</div>
</template>

<script>
import firebase from '../services/firebase'

export default {
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      error: '',
      created: false,
    }
  },
  methods: {
    signUp() {
      if (this.password !== this.repeatPassword) {
        this.error = 'Password mismatch :('
      }
      else {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.$router.push({ name: 'login' })
          })
          .catch((reason) => {
            this.error = reason.message
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-up {
  width: 100%;
  display: flex;
  justify-content: center;
}

.sign-up-form {
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 640px;
}
</style>
