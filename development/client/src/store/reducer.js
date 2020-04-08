import {updateObject} from '../shared/utils';

const initialStateMain = {
  authentication: {
    auth:false
  },
  loader:{
    isLoading: false,
    message: ''
  },
  permissions:{
    all:[],
  }
};

const types = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  SET_AUTH: 'SET_AUTH',
  REMOVE_AUTH: 'REMOVE_AUTH',
  SET_PERMISSIONS: 'SET_PERMISSIONS',
  SET_SELECTED_PERMISSION: 'SET_SELECTED_PERMISSION'
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
    case types.SET_PERMISSIONS: newState = updateState(state, action, 'permissions'); break;
    case types.SET_SELECTED_PERMISSION: newState = updateState(state, action, 'permissions'); break;
  }

  return newState;
}

export {initialStateMain, types, reducerMain};
