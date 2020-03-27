import axios from 'axios';
import {types} from './reducer';

export const useActionsServerRequests = (state, dispatch) => {

  const sendRequestToRegisterUser = async(data) => {
    try{
      dispatch({
        type: types.START_LOADING,
        isLoading: true,
        message: 'Cargando...'
      });

      const response = await axios.post('/register', data);
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

  return {
    sendRequestToRegisterUser
  };
};
