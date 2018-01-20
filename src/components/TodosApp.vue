<template>
  <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5">
            <new-todo-input/>
            <br>
            <todos/>
            <hr>
            <todos-footer/>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import NewTodoInput from '@/components/NewTodoInput'
import Todos from '@/components/Todos'
import TodosFooter from '@/components/TodosFooter'

export default {
  components: {
    NewTodoInput,
    Todos,
    TodosFooter
  }
}
</script>
