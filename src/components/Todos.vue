<template>
  <div v-sortable="{onEnd: reorder}">
    <div v-for="(todo, index) in todos" :key="todo.title" v-show="(visibility === 'all') || (visibility === 'active' && todo.completed === false) || (visibility === 'completed' && todo.completed === true)">
      <b-field class="is-pulled-left">
        <b-checkbox  @input="line(index)" size="is-large" v-bind:class="{ 'line': todo.completed }">{{ todo.title }}</b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="deleteTodo(index)" ></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['todos', 'visibility'])
  },
  methods: {
    ...mapActions([
      'deleteTodo',
      'line',
      'load',
      'reorder'
    ])
  },
  created () {
    this.load()
  }
}
</script>

<style scoped>
  .line {
    text-decoration:line-through;
  }
</style>

