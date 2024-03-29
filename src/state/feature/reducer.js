import * as C from './constants'

const initialState = 'a'

export default (state = initialState, action) => {
  switch (action.type) {
    case C.DISPLAY_FEATURE: {
      return action.payload
    }

    default:
      return state
  }
}
