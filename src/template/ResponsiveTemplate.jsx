import React, { useContext } from 'react';

import { UserContext } from 'store/user-context';

const ResponsiveTemplate = ({ children: PCContents, NonPCContents }) => {
  const userState = useContext(UserContext);
  const viewType = userState.viewType;
  if ((viewType === 'MOBILE' || viewType === 'TABLET') && NonPCContents) {
    return NonPCContents;
  } else if (viewType === 'PC' && PCContents) {
    return PCContents;
  } else {
    return null;
  }
};

export default ResponsiveTemplate;
