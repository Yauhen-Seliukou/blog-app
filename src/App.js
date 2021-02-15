import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SelectPost from './pages/SelectPost/SelectPost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchPosts from "./store/reducers/fetchPosts";
import { loginSuccessRequest } from "../src/store/actions/loginAction";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    dispatch(fetchPosts());
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
