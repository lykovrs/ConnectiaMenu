import { LOAD_MENU_ITEMS, DELETE_ALL_ITEMS, FILTER_ITEMS } from "../constants";

/**
 * Создает экшн для запроса пунктов меню
 * @return {object} объект экшена
 */
export function callMenuItems(num) {
  const action = {
    type: LOAD_MENU_ITEMS,
    callAPI: `http://homework.connectia.com/api/product/list?offset=0&limit=${num}`
  };

  return action;
}

/**
 * Создает экшн удаления всех пунктов меню
 * @return {object} объект экшена
 */
export function deleteAllItems() {
  const action = {
    type: DELETE_ALL_ITEMS
  };

  return action;
}

/**
 * Создает экшн для фильтрации
 * @return {object} объект экшена
 */
export function filterMenuItems(value) {
  const action = {
    type: FILTER_ITEMS,
    payload: {
      filter: value
    }
  };

  return action;
}
