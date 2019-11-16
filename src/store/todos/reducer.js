import { TODOS_TOGGLE_ITEM, TODOS_REMOVE_ITEM } from './actions'

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
      console.log(state)
      console.log(typeof payload, payload)
      return state.filter(todo => todo.id != payload)
    case TODOS_TOGGLE_ITEM:
      return {}
    default: return state;
  }
}