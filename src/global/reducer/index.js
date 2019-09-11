import { NETWORK_FAILED, NETWORK_COMPLETED, NETWORK_BUSY } from '../constants';

export const AppReducer = (state, action) => {
  switch (action.type) {
    case NETWORK_COMPLETED:
      return {
        ...state,
        successMessage: action.message,
      };
    case NETWORK_FAILED:
      return {
        ...state,
        errorMessage: action.message,
      };
    case NETWORK_BUSY:
      return {
        ...state,
        successMessage: null,
        errorMessage: null,
      };
    default:
      return state;
  }
};
