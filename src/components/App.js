import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { useVerifyUser } from '../hooks/useVerifyUser';
import { AdminDataView } from './adminDataView/AdminDataView';
import { AuthPage } from './auth/AuthPage';

export default function App() {
  useVerifyUser();
  return (
    <Router>
      <Switch>
        <Route exact path='/signuplogin' component={AuthPage} />
        <Route exact path='/adv' component={AdminDataView} />
      </Switch>
    </Router>
  );
}
