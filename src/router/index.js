import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { authGuard } from './modules'
import LandingController from './../pages/landing/controller';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <LandingController/>
          </Route>
        </Switch>
    </Router>
  );
}