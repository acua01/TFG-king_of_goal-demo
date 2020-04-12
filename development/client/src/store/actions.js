import {types} from './reducer';

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
    const admin = sessionStorage.getItem('admin');

    if(token){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'authentication',
        data: {
          auth: true,
          admin
        }
      });
    }
  }

  const logout = history => {
    dispatch({
      type: types.GENERAL_TYPE,
      section: 'authentication',
      data: {
        auth: false
      }
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
