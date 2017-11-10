import { LOAD_MENU_ITEMS } from "../constants";

/**
 * Создает экшн для запроса пунктов меню
 * @return {object} объект экшена
 */
export function callMenuItems() {
  const action = {
    type: LOAD_MENU_ITEMS,
    callAPI: "http://homework.connectia.com/api/product/list?offset=10&limit=10"
  };

  return action;
}

/**
 * Создает экшн для запроса текста статьи
 * @return {object} объект экшена
 */
// export function loadArticle(id) {
//   const action = {
//     type: LOAD_ARTICLE,
//     payload: { id },
//     callAPI: `http://localhost:3001/api/article/${id}`
//   };
//
//   return action;
// }
