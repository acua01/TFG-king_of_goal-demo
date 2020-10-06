import {types} from './reducer';
import axios from 'axios';
import {strToBool} from '../shared/utils';

export const useActionsClient = (state, dispatch) => {

  const startLoading = message => {
    dispatch({
      type: types.GENERAL_TYPE,
      section: 'loader',
      data: {
        isLoading: true,
        message
      }
    });
  }

  const endLoading = () => {
    dispatch({
      type: types.GENERAL_TYPE,
      section: 'loader',
      data: {
        isLoading: false,
        message: ''
      }
    });
  }

  const checkAuth = () => {
    const token = sessionStorage.getItem('token');

    axios.defaults.headers.common['api_token'] = token;

    if(token){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'authentication',
        data: {
          auth: true,
          admin: strToBool(sessionStorage.getItem('admin')),
          username: sessionStorage.getItem('username'),
          club: sessionStorage.getItem('club') ? JSON.parse(sessionStorage.getItem('club')) : false,
          //cards: sessionStorage.getItem('cards') ? JSON.parse(sessionStorage.getItem('cards')) : false
        }
      });
    }
  }

  const logout = history => {
    dispatch({
      type: types.GENERAL_TYPE,
      section: 'authentication',
      data: {
        auth: false,
        admin: false,
        username: '',
        club: false
      }
    });

    sessionStorage.setItem('token', '');
    sessionStorage.setItem('admin', '');
    sessionStorage.setItem('username', '');
    sessionStorage.setItem('club', '');

    history.push('/login');
  }

  const setBreadcrumb = breadcrumb => {
    dispatch({
      type: types.GENERAL_TYPE,
      section: 'breadcrumb',
      data: {
        route: breadcrumb
      }
    });
  }

  const setAll = (section, content) => {
    dispatch({
      type: types.GENERAL_TYPE,
      section,
      data: {
        all: content
      }
    });
  }

  const setCurrent = (section, content) => {
    dispatch({
      type: types.GENERAL_TYPE,
      section,
      data: {
        current: content
      }
    });
  }

  const updateSquadValue = (rating, chemistry) => {
    dispatch({
      type: types.GENERAL_TYPE,
      section: 'squads',
      data: {
        current: {
          ...state.app.squads.current,
          rating,
          chemistry
        }
      }
    });
  }

  const startDraft = () => {

    const arrayPositionsNames = ['por', 'li', 'dfc1', 'dfc2', 'ld', 'mc1', 'mco', 'mc2', 'ei', 'dc', 'ed',
      'alt1', 'alt2', 'alt3', 'alt4', 'alt5', 'alt6', 'alt7', 'res1', 'res2', 'res3', 'res4', 'res5'
    ];

    let arrayCards = [];

    for(let i = 0; i < arrayPositionsNames.length; i++){
      arrayCards.push({
        id: i + 1,
        position: arrayPositionsNames[i],
        id_card: null
      });
    }

    dispatch({
      type: types.GENERAL_TYPE,
      section: 'draft',
      data: {
        cards: arrayCards
      }
    });
  }

  const setDraftCards = (positions) => {

    dispatch({
      type: types.GENERAL_TYPE,
      section: 'draft',
      data: {
        cards: positions
      }
    });
  }

  const updateDraftRating = (rating) => {
    dispatch({
      type: types.GENERAL_TYPE,
      section: 'draft',
      data: {
        rating
      }
    });
  }

  const updateDraftChemistry = (chemistry) => {
    dispatch({
      type: types.GENERAL_TYPE,
      section: 'draft',
      data: {
        chemistry
      }
    });
  }

  return {
    startLoading,
    endLoading,
    checkAuth,
    logout,
    setBreadcrumb,
    setAll,
    setCurrent,
    updateSquadValue,
    setDraftCards,
    startDraft,
    updateDraftRating,
    updateDraftChemistry
  };
};
