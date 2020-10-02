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

  return {
    startLoading,
    endLoading,
    checkAuth,
    logout,
    setBreadcrumb,
    setAll,
    setCurrent,
    updateSquadValue
  };
};
