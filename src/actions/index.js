import { UPDATE_STONKS_VALUE } from "./actionTypes";

export const updateStonks = value => ({
  type: UPDATE_STONKS_VALUE,
  stonksValue: value
});
