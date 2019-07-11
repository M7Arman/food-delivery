import { GET_MENU } from '../actions/types';

const initialState = {
  menuItems: [],
}

export const menuReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_MENU:
    return {
      ...state,
      menuItems: payload
    }

  default:
    return state
  }
}
