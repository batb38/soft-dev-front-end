import React, { useState, useEffect, Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import history from './assets/history';

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Footer from './components/Footer';
import Header from './components/Header';
import Lessons from "./components/Lessons";
import LessonDetail from "./components/LessonDetail";
import CreateLesson from "./components/CreateLesson";

const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <React.Fragment>
      <Router history={history}>
        <Suspense fallback={<p>Loading</p>}>
          <Header />
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/lessons" component={Lessons} />
            <Route path='/lesson/:id' component={LessonDetail} />
            <Route exact path='/create-lesson' component={CreateLesson} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default App;
