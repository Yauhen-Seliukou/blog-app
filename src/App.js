import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import FirstPage from './pages/FirstPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="my-container">
        <Header className="container-fluid"/>
        <div className="content">
          <Switch>
            <Route exact path='/' component={FirstPage}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
