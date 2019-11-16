import { FILTER_ALL } from '../../filters'
import { SET_FILTER } from './actions'

const initState = FILTER_ALL

export default function (state = initState, { type, payload }) {
  switch (type) {
    case SET_FILTER:
      return payload
    default:
      return state
  }
}