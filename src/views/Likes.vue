<template>
  <div>
    <list-view :items="kittens">
      <template #header>
        <h2>
          Your {{ kittens.length }} fav kittens :D
        </h2>
      </template>

      <template #default="{ item }">
        <div>
          <img :src="item.url" alt="Really, never forget to set the alt">
        </div>
      </template>

      <template #empty>
        <h4>
          You must be really hating kittens to not like anyone :(
        </h4>
      </template>

      <template #footer>
        <div>
          Made by Pablo
        </div>
      </template>
    </list-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ListView } from '@/components'

export default {
  components: {
    ListView,
  },
  computed: mapState({
    kittens: state => state.catindr.matches,
  })
}
</script>

<style lang="scss" scoped>
img {
  width: 320px;
  height: calc(320px * 4 / 3);
  border-radius: 8px;
}
</style>
