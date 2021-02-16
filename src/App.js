import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SelectPost from './pages/SelectPost/SelectPost';
import { loginSuccessRequest } from "../src/store/actions/loginAction";
import { postsSuccessRequest } from "./store/actions/postsActions";
import posts from "./mocks/posts";

import './App.scss';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  const postFromLocalStorage = JSON.parse(localStorage.getItem('posts'))?.posts || [];
  useEffect(() => {
    dispatch(postsSuccessRequest(postFromLocalStorage.length ? postFromLocalStorage : posts));
    dispatch(loginSuccessRequest(user));
  });

  return (
    <Router>
      <div className="my-container">
        <Header className="container-fluid"/>
        <main className="content">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/post/:postID' component={SelectPost}></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
