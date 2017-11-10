import { LOAD_MENU_ITEMS } from "../constants";
import { Record, Map } from "immutable";

const FiltersModel = new Record({
  selected: [],
  dateRange: new Map()
});

const defaultFilters = new FiltersModel();

/**
 * Редьюссер хранения и обработки данных фильтрации
 * @param  {object} [filters=defaultFilters] принимает объект для работы с фильтрами
 * @param  {object} action                   обект экшена
 * @return {object}                          параметры фильтрации
 */
export default (filters = defaultFilters, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_MENU_ITEMS:
      return filters.setIn(["dateRange"], payload.dateRange);

    default:
      return filters;
  }
};
