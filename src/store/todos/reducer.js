import { TODOS_TOGGLE_ITEM, TODOS_REMOVE_ITEM, TODOS_ADD_ITEM } from './actions'

export default function (state = [], { type, payload }) {
  switch (type) {
    case TODOS_REMOVE_ITEM:
      return state.filter(todo => todo.id !== payload)
    case TODOS_TOGGLE_ITEM:
      console.log(state)
      console.log(payload)
      return state.map(el => el.id === payload ?
        {...el, isDone: !el.isDone} :
        el);
    case TODOS_ADD_ITEM:
      const newTodo = {
        ...payload,
        isDone: false,
        id: Date.now(),
      }
      return [ ...state, newTodo]
    default: return state;
  }
}