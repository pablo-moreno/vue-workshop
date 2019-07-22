<template>
  <div class="kitten-card">
    <img :src="kitten.url" alt="Never forget to add the alt :D">

    <div class="kitten-card-buttons">
      <button class="kitten-like" @click="like">
        <i class="material-icons">check</i>
      </button>
      <button class="kitten-dislike" @click="dislike">
        <i class="material-icons">close</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    kitten: {
      type: Object,
    },
  },
  methods: {
    like() {
      this.$emit('like', this.kitten)
    },
    dislike() {
      const devil = confirm('Are you sure you don\'t like this adorable kitten?')

      if (devil) {
        alert('You deserve not to be loved by anyone and die alone ¬¬')
        this.$emit('dislike', this.kitten)
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.kitten-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 480px;
    width: auto;
    border-radius: 8px;
    box-shadow: 2px 2px 2px #eaeaea;
    cursor: pointer;
  }

  &-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
      margin: 1em;
      border-radius: 80px;
      width: 80px;
      height: 80px;
      
      i {
        font-size: 200%;
      }
    }
  }

  .kitten-like {
    background-color: $green;
    box-shadow: 2px 2px 8px #eaeaea;

    &:hover {
      background-color: $green-light;
    }
  }

  .kitten-dislike {
    background-color: $red;

    &:hover {
      background-color: $red-light;
    }
  }
}
</style>
