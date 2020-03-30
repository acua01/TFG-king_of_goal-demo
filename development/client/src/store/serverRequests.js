import axios from 'axios';
import {types} from './reducer';
import {showMessages} from '../shared/utils';

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

      // Guardar los datos de la respuesta en el reducer
      // Mostrar mensaje satisfactorio

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

      //Mostrar mensajes de error

      console.log(e.response, e);
    }
  }

  const sendRequestToLoginUser = async(data) => {
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
      // Guardar los datos de la respuesta en el reducer
      // Mostrar mensaje satisfactorio

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

      showMessages(e, 'error')
    }
  }

  return {
    sendRequestToRegisterUser,
    sendRequestToLoginUser
  };
};
