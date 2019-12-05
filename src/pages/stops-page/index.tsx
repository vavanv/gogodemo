import * as React from 'react';

import { MainContainer } from 'src/pages/main-container';
import { StopsFormContainer } from 'src/pages/stops-page/stops-form/container';

function StopsPageComponent() {
  return (
    <MainContainer>
      <StopsFormContainer />
    </MainContainer>
  );
}

export const StopsPage = React.memo(StopsPageComponent);
