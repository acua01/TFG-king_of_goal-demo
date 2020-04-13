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

    let admin;

    if(sessionStorage.getItem('admin') === 'true'){
      admin = true;
    }else{
      admin = false;
    }

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
        auth: false,
        admin: false
      }
    });

    sessionStorage.setItem('token', '');

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
