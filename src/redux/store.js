import { createStore, combineReducers } from "redux";
import { userReducer as user } from "./ducks/user";
import { searchReducer as search } from './ducks/search'
const reducers = combineReducers({
  user,
  search
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
