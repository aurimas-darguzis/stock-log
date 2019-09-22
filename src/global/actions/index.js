import {
  FETCH_PRODUCT_LOG_COMPLETED,
  FETCH_PRODUCT_LOG_FAILED,
  NETWORK_BUSY,
} from '../constants';

export const fetchProductLogCompleted = message => ({
  type: FETCH_PRODUCT_LOG_COMPLETED,
  message,
});

export const fetchProductLogFailed = message => ({
  type: FETCH_PRODUCT_LOG_FAILED,
  message,
});

export const networkBusy = () => ({
  type: NETWORK_BUSY,
});
