import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import Modal from 'react-modal';

import Events from 'page/events/Events';
import Help from 'page/help/Help';
import Profile from 'page/profile/Profile';
import { Login, ResetPage, ActivatePage, CompletePage, Welcome, RegisterPage } from 'page';
import Training from 'page/training/Training';
import MainPage from 'page/main/MainPage';
import Courses from 'page/Courses/Courses';
import Tests from 'page/tests/Test';
import { StylesProvider } from '@mui/styles';
import { history } from 'helpers/history';
import RouteGuard from 'components/RouteGuard';
import {
  PageVolunteers,
  PageInstructorPrivileges,
  PageInstructors,
  PageMechanicsAndPayments,
  PageAssignmentAndStandarts,
  PageRegulations,
} from 'page';

import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.scss';
import './App.css';

Modal.setAppElement('#root');

function App() {
  return (
    <StylesProvider>
      <NotificationContainer />
      <Router history={history}>
        <Switch>
          <RouteGuard path="/" component={MainPage} exact />
          <RouteGuard path="/profile" component={Profile} exact />
          <RouteGuard path="/events" component={Events} exact />
          <RouteGuard path="/training" component={Training} exact />
          <RouteGuard path="/help" component={Help} exact />
          <RouteGuard path="/courses" component={Courses} exact />
          <RouteGuard path="/tests/:id" component={Tests} exact />

          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/login" component={Login} />
          <Route exact path="/password-reset" component={ResetPage} />
          <Route exact path="/complete" component={CompletePage} />
          <Route path="/auth/activate">
            <ActivatePage />
          </Route>

          <RouteGuard path="/volunteers" component={PageVolunteers} exact />
          <RouteGuard path="/instructor-privileges" component={PageInstructorPrivileges} exact />
          <RouteGuard path="/instructors" component={PageInstructors} exact />
          <RouteGuard path="/selection-and-payments" component={PageMechanicsAndPayments} exact />
          <RouteGuard path="/assignment-and-standarts" component={PageAssignmentAndStandarts} exact />
          <RouteGuard path="/regulations" component={PageRegulations} exact />
        </Switch>
      </Router>
    </StylesProvider>
  )
}

export default App
