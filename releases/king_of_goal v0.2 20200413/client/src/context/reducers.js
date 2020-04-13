import combineReducers from './combineReducers';
import {initialStateMain, reducerMain} from '../store/reducer';

const initialState = {
  app:initialStateMain,
};

const reducer = combineReducers({
  app: reducerMain,
});

export {initialState, reducer};
