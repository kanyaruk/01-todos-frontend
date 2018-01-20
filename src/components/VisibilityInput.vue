<template>
  <div>
    <b-field class="is-pulled-right">
      <b-radio-button v-model="visibility"
        native-value="all">
        <span>All ({{count}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="active"> 
        <span>Active ({{countActives}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="completed">
        <span>Completed ({{countCompleted}})</span>
      </b-radio-button>
    </b-field>
  </div>
</template>

<script>
import { store } from '@/store'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['count', 'countActives', 'countCompleted']),
    visibility: {
      get: function () {
        return store.state.visibility
      },
      set: function (newValue) {
        store.dispatch('changeVisibility', newValue)
      }
    }
  }
}
</script>
