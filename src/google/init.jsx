import * as React from 'react';
import ReactGA from 'react-ga';
import { useHistory } from 'react-router';

import { initGa } from './ga';

const Init = () => {
  const history = useHistory();
  React.useEffect(() => {
    console.log('실행됩니다.');
    initGa();
    history.listen((location, action) => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });
  }, []);

  return null;
};

export default Init;
