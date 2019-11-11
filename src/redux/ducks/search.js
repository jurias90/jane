import { createAction } from "redux-actions";
import update from "immutability-helper";

/*
|-------------------------------------------------------------------------------
| Action Types
|-------------------------------------------------------------------------------
*/

export const UPDATE_SEARCH = "search/UPDATE_SEARCH";

/*
|-------------------------------------------------------------------------------
| Standard Actions
|-------------------------------------------------------------------------------
*/
export const updateSearch = createAction(UPDATE_SEARCH);

/*
|-------------------------------------------------------------------------------
| Reducer
|-------------------------------------------------------------------------------
*/
const initialState = {
  search: {
    term: "",
  }
};

export const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_SEARCH:
      return update(state, { search: { $merge: payload } });

    default:
      return state;
  }
};
