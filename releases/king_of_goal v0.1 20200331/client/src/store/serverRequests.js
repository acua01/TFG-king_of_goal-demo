import axios from 'axios';
import {types} from './reducer';
import {showSnackbar, showMessages} from '../shared/utils';

export const useActionsServerRequests = (state, dispatch) => {

  const sendRequestToRegisterUser = async(history, data) => {
    try{
      dispatch({
        type: types.START_LOADING,
        isLoading: true,
        message: 'Cargando...'
      });

      const response = await axios.post('/register', data);

      history.push('/login');

      showSnackbar('success', 'Te has registrado correctamente.');

      dispatch({
        type: types.END_LOADING,
        isLoading: false,
        message: ''
      });
    }catch(e){
      dispatch({
        type: types.END_LOADING,
        isLoading: false,
        message: ''
      });

      showMessages('error', e);
    }
  }

  const sendRequestToLoginUser = async(history, data) => {
    try{
      dispatch({
        type: types.START_LOADING,
        isLoading: true,
        message: 'Cargando...'
      });

      const response = await axios.post('/login', data);

      axios.defaults.headers.common['api_token'] = response.data.token;

      sessionStorage.setItem('token', response.data.token);

      dispatch({
        type: types.SET_AUTH,
        auth: true
      });

      history.push('/');

      showSnackbar('success', 'Has iniciado sesión correctamente.');

      dispatch({
        type: types.END_LOADING,
        isLoading: false,
        message: ''
      });
    }catch(e){
      dispatch({
        type: types.END_LOADING,
        isLoading: false,
        message: ''
      });

      showMessages('error', e);
    }
  }

  return {
    sendRequestToRegisterUser,
    sendRequestToLoginUser
  };
};
