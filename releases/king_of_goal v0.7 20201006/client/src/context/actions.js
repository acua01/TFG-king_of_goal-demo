import {useActionsServerRequests} from '../store/serverRequests';
import {useActionsClient} from '../store/actions';

export const useActions = (state, dispatch) => {
  return {
    ...useActionsServerRequests(state,dispatch),
    ...useActionsClient(state,dispatch),
  };
};
