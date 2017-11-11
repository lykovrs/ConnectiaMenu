import { LOAD_MENU_ITEMS, SUCCESS } from "../constants";
import { List, Record } from "immutable";

const FiltersModel = new Record({
  menuItems: new List([])
});

const defaultMenuItems = new FiltersModel();

/**
 * Редьюссер хранения и обработки данных фильтрации
 * @param  {object} [menuItems=defaultMenuItems] принимает объект для работы с фильтрами
 * @param  {object} action                   обект экшена
 * @return {object}                          параметры фильтрации
 */
export default (menuItems = defaultMenuItems, action) => {
  const { type, collection } = action;
  switch (type) {
    case LOAD_MENU_ITEMS + SUCCESS:
      console.log(action);
      return menuItems.setIn(["menuItems"], collection);

    default:
      return menuItems;
  }
};
