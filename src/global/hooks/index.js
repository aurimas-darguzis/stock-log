import { useContext } from 'react';

import { fetchProductLogkCompleted, fetchProductLogFailed } from '../actions';
import { AppContext } from '../context';

const useApp = () => {
  const { state } = useContext(AppContext);

  return {
    productLogs: state.productLogs,
  };
};

export default useApp;
