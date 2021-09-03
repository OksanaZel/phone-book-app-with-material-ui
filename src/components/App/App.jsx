import React from "react";
import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from "redux/auth";
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import AppBar from "../AppBar";
import HomeView from "views/HomeView";
import RegisterView from "views/RegisterView";
import LoginView from "views/LoginView";
import ContactsView from "views/ContactsView";

function App() {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(authSelectors.getIsRefreshingCurrentUser);
  
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch])
  
  return (
    !isRefreshingCurrentUser && (
      <>
        <AppBar />
      <Switch>
        <PublicRoute exact path="/">
          <HomeView />
        </PublicRoute>

        <PublicRoute path="/registration" restricted>
            <RegisterView />
        </PublicRoute>

        <PublicRoute path="/login" redirectTo="/contacts" restricted>
          <LoginView />
          </PublicRoute>

        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsView />
        </PrivateRoute>
        </Switch>
        </>
    )
  )
}

export default App;
