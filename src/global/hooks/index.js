import { useContext } from 'react';

import { networkCompleted, networkFailed, networkBusy } from '../actions';
import { AppContext } from '../context';

const useApp = () => {
  const { state, dispatch } = useContext(AppContext);

  // Network call succeeded
  function onNetworkSuccess(message) {
    dispatch(networkCompleted(message));
  }

  // Network call failed
  function onNetworkFail(message) {
    dispatch(networkFailed(message));
  }

  // Network busy
  function onNetworkBusy() {
    dispatch(networkBusy());
  }

  return {
    onNetworkBusy,
    onNetworkSuccess,
    onNetworkFail,
    successMessage: state.successMessage,
    errorMessage: state.errorMessage,
  };
};

export default useApp;
