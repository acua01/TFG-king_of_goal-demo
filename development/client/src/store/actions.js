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
          club: sessionStorage.getItem('club') ? JSON.parse(sessionStorage.getItem('club')) : false 
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

  return {
    startLoading,
    endLoading,
    checkAuth,
    logout,
    setBreadcrumb
  };
};
