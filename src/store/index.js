import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    DELETE_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    TOGGLE_TODO (state, index) {
      state.todos[index].completed = !state.todos[index].completed
    },
    CLEAR_COMPELETED_TODO (state) {
      state.todos = state.todos.filter(todo => todo.completed === false)
    },
    LOAD (state, todos) {
      state.todos = todos
    },
    REORDER (state, {oldIndex, newIndex}) {
      const movedItem = state.todos.splice(oldIndex, 1)[0]
      state.todos.splice(newIndex, 0, movedItem)
    }
  },
  actions: {
    addTodo ({commit, dispatch}, title) {
      commit('ADD_TODO', title)
      dispatch('save')
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    deleteTodo ({commit, dispatch}, index) {
      commit('DELETE_TODO', index)
      dispatch('save')
    },
    line ({commit, dispatch}, index) {
      commit('TOGGLE_TODO', index)
      dispatch('save')
    },
    clearCompeleted ({commit, dispatch}) {
      commit('CLEAR_COMPELETED_TODO')
      dispatch('save')
    },
    save ({state}) {
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    load ({commit}) {
      let todos = localStorage.getItem('todos')
      if (todos != null) {
        commit('LOAD', JSON.parse(todos))
      }
    },
    reorder ({commit}, {oldIndex, newIndex}) {
      commit('REORDER', {oldIndex, newIndex})
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility,
    count: state => state.todos.length,
    countActives: state => state.todos.filter(todo => todo.completed === false).length,
    countCompleted: state => state.todos.filter(todo => todo.completed === true).length
  }
})
