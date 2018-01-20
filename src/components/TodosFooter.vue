<template>
  <div>
    <div class="columns">
      <div class="column ">
        <p class="is-pulled-left"> {{count}} items left</p>
        <visibility-input/>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-4">
        <button class="button is-danger " @click="clearCompeleted()">Clear Completed</button>
      </div>
    </div>
  </div>
</template>

<script>
import VisibilityInput from '@/components/VisibilityInput'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    VisibilityInput
  },
  computed: {
    ...mapGetters(['count', 'countActives', 'countCompleted'])
  },
  methods: {
    ...mapActions(['clearCompeleted'])
  }
}
</script>
