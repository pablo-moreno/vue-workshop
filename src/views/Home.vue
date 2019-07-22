<template>
  <div class="home">
    <list-view :items="kittens">
      <template #header>
        <h2>
          Kittens :D
        </h2>
      </template>

      <template #default="{ item }">
        <kitten-card 
          :kitten="item" 
          @like="kitten => like(kitten)"
          @dislike="kitten => dislike(kitten)"  
        />
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
import { ListView, KittenCard } from '@/components'
import { mapState } from 'vuex'

export default {
  name: "home",
  components: {
    KittenCard,
    ListView,
  },
  data() {
    return {
      items: [],
      query: '',
    }
  },
  computed: mapState({
    users: state => state.users,
    kittens: state => state.catindr.kittens,
  }),
  created() {
    if (this.kittens.length === 0) {
      this.getKittens()
    }
  },
  methods: {
    async getKittens() {
      const { data } = await this.$http.get('https://api.thecatapi.com/v1/images/search', {
        params: {
          limit: 50,
          size: 'med',
        }
      })
      this.$store.dispatch('addKittens', data)
    },
    like(kitten) {
      this.$store.dispatch('match', kitten)
    },
    dislike(kitten) {
      this.$store.dispatch('unmatch', kitten)
    }
  }
}
</script>
