import { TODOS_TOGGLE_ITEM, TODOS_REMOVE_ITEM, TODOS_ADD_ITEM } from './actions'

const initState = [
  {
    id: 1,
    title: 'Task 1',
    isDone: false,
  },
  {
    id: 2,
    title: 'Task 2',
    isDone: true,
  },
  {
    id: 3,
    title: 'Task 3',
    isDone: false,
  },
]

export default function (state = initState, { type, payload }) {
  switch (type) {
    case TODOS_REMOVE_ITEM:
      return state.filter(todo => todo.id != payload)
    case TODOS_TOGGLE_ITEM:
      const itemTodo = { ...payload, isDone: !payload.isDone }
      return state.map(el => el.id === itemTodo.id ? itemTodo : el);

    case TODOS_ADD_ITEM:
      return [ ...state, payload]
    default: return state;
  }
}