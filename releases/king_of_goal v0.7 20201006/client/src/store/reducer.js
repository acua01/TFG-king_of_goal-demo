import {updateObject} from '../shared/utils';

const initialStateMain = {
  authentication: {
    auth:false,
    admin:false,
    username:'',
    club:false
  },
  loader:{
    isLoading: false,
    message: ''
  },
  permissions:{
    all:[],
  },
  breadcrumb: {
    route: []
  },
  players: {
    all: []
  },
  countries: {
    all: []
  },
  leagues: {
    all: []
  },
  cardsTypes: {
    all: []
  },
  teams: {
    all: []
  },
  positions: {
    all: []
  },
  cards: {
    all: []
  },
  clubCards:{
    all: []
  },
  packs:{
    all: []
  },
  packCards:{
    all: []
  },
  squads:{
    all: [],
    current: {},
    cards: []
  },
  draft:{
    cards: [],
    rating: 0,
    chemistry: 0
  }
};

const types = {
  GENERAL_TYPE: 'GENERAL_TYPE',
};

const updateState = (state, action) => {
  delete action.type;
  
  return updateObject(state, {[action.section]:{...state[action.section],...action.data}});
}

const reducerMain = (state, action) => {
  let newState = state;

  switch(action.type){
    case types.GENERAL_TYPE: newState = updateState(state, action); break;
    default: console.log('action.type not found');
  }

  return newState;
}

export {initialStateMain, types, reducerMain};
