import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { authGuard } from './modules'
import LoginController from '../pages/authentication/login/login-controller'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <LoginController/>
          </Route>
        </Switch>
    </Router>
  );
}