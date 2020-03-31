import {updateObject} from '../shared/utils';

const initialStateMain = {
  authentication: {
    auth:false
  },
  loader:{
    isLoading: false,
    message: ''
  }
};

const types = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  SET_AUTH: 'SET_AUTH',
  REMOVE_AUTH: 'REMOVE_AUTH'
};

const updateState = (state, action, section) => {
  delete action.type;

  return updateObject(state, {[section]:{...action}});
}

const reducerMain = (state, action) => {
  let newState = state;

  switch(action.type){
    case types.START_LOADING: newState = updateState(state, action, 'loader'); break;
    case types.END_LOADING: newState = updateState(state, action, 'loader'); break;
    case types.SET_AUTH: newState = updateState(state, action, 'authentication'); break;
    case types.REMOVE_AUTH: newState = updateState(state, action, 'authentication'); break;
  }

  return newState;
}

export {initialStateMain, types, reducerMain};
