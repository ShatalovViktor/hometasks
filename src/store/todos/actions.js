export const TODOS_REMOVE_ITEM = 'TODOS_REMOVE_ITEM'
export const TODOS_TOGGLE_ITEM = 'TODOS_TOGGLE_ITEM'

export const removeTodo = (id) => ({
  type: TODOS_REMOVE_ITEM,
  payload: id
})
export const toggleTodo = (id) => ({
  type: TODOS_TOGGLE_ITEM,
  payload: id
})