import {
  FETCH_PRODUCT_LOG_FAILED,
  FETCH_PRODUCT_LOG_COMPLETED,
  NETWORK_BUSY,
} from '../constants';

export const AppReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LOG_COMPLETED:
      return {
        ...state,
        successMessage: action.message,
      };
    case FETCH_PRODUCT_LOG_FAILED:
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
