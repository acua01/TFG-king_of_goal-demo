import {types} from './reducer';

export const useActionsClient = (state, dispatch) => {

  const startLoading = message => {
    dispatch({
      type: types.START_LOADING,
      isLoading: true,
      message
    });
  }

  const endLoading = () => {
    dispatch({
      type: types.END_LOADING,
      isLoading: false,
      message: ''
    });
  }

  const checkAuth = () => {
    const token = sessionStorage.getItem('token');

    if(token){
      dispatch({
        type: types.SET_AUTH,
        auth: true
      });
    }
  }

  const logout = history => {
    dispatch({
      type: types.REMOVE_AUTH,
      auth: false
    });

    sessionStorage.setItem('token', '');

    history.push('/login');
  }

  return {
    startLoading,
    endLoading,
    checkAuth,
    logout
  };
};
