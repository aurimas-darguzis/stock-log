import { NETWORK_COMPLETED, NETWORK_FAILED, NETWORK_BUSY } from '../constants';

export const networkCompleted = message => ({
  type: NETWORK_COMPLETED,
  message,
});

export const networkFailed = message => ({
  type: NETWORK_FAILED,
  message,
});

export const networkBusy = () => ({
  type: NETWORK_BUSY,
});
