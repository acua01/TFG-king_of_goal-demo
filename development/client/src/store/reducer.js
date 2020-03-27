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
  END_LOADING: 'END_LOADING'
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
  }

  return newState;
}

export {initialStateMain, types, reducerMain};
