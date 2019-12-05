import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { StopsPage } from 'src/pages/stops-page';
import { ROUTE_ROOT } from 'src/app/app/constants';

const Routes = () => (
  <>
    <Switch>
      <Route exact path={ROUTE_ROOT} component={StopsPage} />
    </Switch>
  </>
);

export default withRouter(Routes);
