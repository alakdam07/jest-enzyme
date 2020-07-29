import { combineReducers } from 'redux';
import counter from 'store/reducer/counter';
import todo from 'store/reducer/todo/todo';
import fetchUser from 'store/reducer/fetch';

const rootReducer = combineReducers({
  counter,
  todo,
  fetchUser
});

export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
