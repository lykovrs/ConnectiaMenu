import {
  LOAD_MENU_ITEMS,
  DELETE_ALL_ITEMS,
  SUCCESS,
  START
} from "../constants";
import { List, Record } from "immutable";
import { DefaultReducerState } from "./helpers";

const defaultState = new DefaultReducerState();

/**
 * Редьюссер хранения и обработки данных фильтрации
 * @param  {object} [state=defaultState] принимает объект для работы с фильтрами
 * @param  {object} action                   обект экшена
 * @return {object}                          параметры фильтрации
 */
export default (state = defaultState, action) => {
  const { type, collection, payload } = action;
  switch (type) {
    case LOAD_MENU_ITEMS + START:
      return state.setIn(["isLoading"], true);

    case LOAD_MENU_ITEMS + SUCCESS:
      return state.setIn(["menuItems"], collection).set("isLoading", false);

    case DELETE_ALL_ITEMS:
      return state.setIn(["menuItems"], []).set("isLoading", false);

    default:
      return state;
  }
};
