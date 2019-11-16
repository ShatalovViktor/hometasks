import { connect } from 'react-redux'
import List from './List'
import { removeTodo, toggleTodo } from '../../store/todos/actions'
import { FILTER_ALL, FILTER_DONE, FILTER_NOT_DONE } from '../../filters'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FILTER_ALL:
      return todos
    case FILTER_DONE:
      return todos.filter(todo => todo.completed)
    case FILTER_NOT_DONE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

function mapStateToProps (state) {
  return {
    todos: getVisibleTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = {
  remove: removeTodo,
  toggle: toggleTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(List)