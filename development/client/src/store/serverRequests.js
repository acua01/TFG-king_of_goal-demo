import axios from 'axios';
import {types} from './reducer';
import {showSnackbar, showMessages} from '../shared/utils';

export const useActionsServerRequests = (state, dispatch) => {

  /*========== AUTHENTICATION ===============================================*/

  const sendRequestToRegisterUser = async(history, data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/register', data);

      history.push('/login');

      showSnackbar('success', 'Te has registrado correctamente.');

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToLoginUser = async(history, data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/login', data);

      axios.defaults.headers.common['api_token'] = response.data.token;

      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('admin', response.data.is_admin);

      console.log(response.data.is_admin);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'authentication',
        data:{
          auth: true,
          admin: response.data.is_admin
        }
      });

      history.push('/inicio');

      showSnackbar('success', 'Has iniciado sesión correctamente.');

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END AUTHENTICATION ===========================================*/

  /*========== PERMISSIONS ==================================================*/

  const askForAllPermissions = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/permissions');

      dispatch({
        type: types.GENERAL_TYPE,
        section:'permissions',
        data:{
          all: response.data.permissions
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToInsertPermission = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/insert_permission', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'permissions',
        data:{
          all: response.data.permissions
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToDeletePermission = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/delete_permission', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'permissions',
        data:{
          all: response.data.permissions
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToUpdatePermission = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/update_permission', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'permissions',
        data:{
          all: response.data.permissions
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END PERMISSIONS ==============================================*/

  /*========== PLAYERS ======================================================*/

  const askForAllPlayers = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/players');

      dispatch({
        type: types.GENERAL_TYPE,
        section:'players',
        data:{
          all: response.data.players
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToInsertPlayer = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/insert_player', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'players',
        data:{
          all: response.data.players
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToDeletePlayer = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/delete_player', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'players',
        data:{
          all: response.data.players
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToUpdatePlayer = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/update_player', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'players',
        data:{
          all: response.data.players
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END PLAYERS ==================================================*/

  return {

    /*---------- Authentication ---------------------------------------------*/

    sendRequestToRegisterUser,
    sendRequestToLoginUser,

    /*---------- End Authentication -----------------------------------------*/

    /*---------- Permissions ------------------------------------------------*/

    askForAllPermissions,
    sendRequestToInsertPermission,
    sendRequestToDeletePermission,
    sendRequestToUpdatePermission,

    /*---------- End Permissions --------------------------------------------*/

    /*---------- Players ----------------------------------------------------*/

    askForAllPlayers,
    sendRequestToInsertPlayer,
    sendRequestToDeletePlayer,
    sendRequestToUpdatePlayer,

    /*---------- End Players ------------------------------------------------*/
  };
};
