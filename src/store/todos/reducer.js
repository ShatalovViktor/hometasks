import { TODOS_TOGGLE_ITEM, TODOS_REMOVE_ITEM, TODOS_ADD_ITEM } from './actions'

export default function (state = [], { type, payload }) {
  switch (type) {
    case TODOS_REMOVE_ITEM:
      return state.filter(todo => todo.id !== payload)
    case TODOS_TOGGLE_ITEM:
      const itemTodo = { ...payload, isDone: !payload.isDone }
      return state.map(el => el.id === itemTodo.id ? itemTodo : el);
    case TODOS_ADD_ITEM:
      const newTodo = {
        ...payload,
        id: Date.now(),
      }
      return [ ...state, newTodo]
    default: return state;
  }
}