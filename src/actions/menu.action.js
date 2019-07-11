import { GET_MENU } from './types'
import { APIS } from '../utils/config'

export const getMenuItems = () => dispatch => {
  fetch(APIS.MENU)
    .then(res => res.json())
    .then(menu => dispatch({
      type: GET_MENU,
      payload: menu
    }));
}