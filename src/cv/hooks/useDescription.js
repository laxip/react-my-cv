import { useContext } from 'react';

import cvContext from '../ctx/cvContext.js';

const useDescription = () => {
  return useContext(cvContext);
};

export default useDescription;
