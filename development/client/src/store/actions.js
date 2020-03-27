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

  return {
    startLoading,
    endLoading
  };
};
