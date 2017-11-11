import { Record, List } from "immutable";

export const DefaultReducerState = new Record({
  isLoading: false,
  menuItems: new List([])
});
