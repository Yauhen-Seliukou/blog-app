import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/LoginPage';
import PostPage from './pages/PostPage/PostPage';
import { fetchLoginSuccess } from "../src/store/actions/loginAction";
import { getDataFromLocalStorage } from "./services/commandForLocalStorage";

import './App.scss';

function App() {
  const dispatch = useDispatch();
  const user = getDataFromLocalStorage('user');
  useEffect(() => {
    dispatch(fetchLoginSuccess(user));
  }, [dispatch, user]);

  return (
    <Router>
      <div className="my-container">
        <Header className="container-fluid"/>
        <main className="content">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/post/:postID' component={PostPage}></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
